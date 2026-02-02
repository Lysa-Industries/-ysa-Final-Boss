import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import TheoryView from "./TheoryView";
import ChoiceTask from "./Tasks/ChoiceTask";
import TextTask from "./Tasks/TextTask";
import Topbar from "./Topbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function Dashboard() {
  const [activeTopic, setActiveTopic] = useState(null);
  const [currentTab, setCurrentTab] = useState("theory");

  const handleTopicSelect = (topic) => {
    setActiveTopic(topic);
    setCurrentTab("theory");
  };

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar onSelectTopic={handleTopicSelect} />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Topbar onSelectTopic={handleTopicSelect} />

        <main className="flex-1 p-8 md:p-12 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {activeTopic ? (
              <Tabs
                value={currentTab}
                onValueChange={setCurrentTab}
                className="w-full space-y-6"
              >
                <TabsList className="grid w-full grid-cols-3 max-w-[500px]">
                  <TabsTrigger value="theory">Teoria</TabsTrigger>
                  <TabsTrigger value="choice">Zadania wyboru</TabsTrigger>
                  <TabsTrigger value="text">Zadania tekstowe</TabsTrigger>
                </TabsList>

                <div className="mt-6">
                  <TabsContent
                    value="theory"
                    className="space-y-4 outline-none"
                  >
                    <TheoryView theory={activeTopic.theory} />
                  </TabsContent>

                  <TabsContent
                    value="choice"
                    className="space-y-6 outline-none"
                  >
                    {activeTopic.choiceTasks &&
                    activeTopic.choiceTasks.length > 0 ? (
                      activeTopic.choiceTasks.map((t) => (
                        <ChoiceTask key={t.id} task={t} />
                      ))
                    ) : (
                      <div className="text-muted-foreground p-4 text-center border rounded-lg bg-card">
                        Brak zadań wyboru dla tego tematu.
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent
                    value="text"
                    className="space-y-6 outline-none"
                  >
                    {activeTopic.textTasks &&
                    activeTopic.textTasks.length > 0 ? (
                      activeTopic.textTasks.map((t) => (
                        <TextTask key={t.id} task={t} />
                      ))
                    ) : (
                      <div className="text-muted-foreground p-4 text-center border rounded-lg bg-card">
                        Brak zadań tekstowych dla tego tematu.
                      </div>
                    )}
                  </TabsContent>
                </div>
              </Tabs>
            ) : (
              <div className="flex h-[50vh] items-center justify-center text-center">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-3">
                    Zmierz się z Łysą Final Boss!
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Wybierz temat z menu po lewej stronie, aby rozpocząć
                    naukę.
                  </p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
