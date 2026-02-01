import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "../../lib/utils";

export default function ChoiceTask({ task }) {
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState(null);

  const handleCheck = () => {
    if (!selected) return;
    setFeedback(selected === task.correct ? "correct" : "wrong");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium leading-relaxed">
          {task.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {task.options.map((opt) => (
          <label
            key={opt}
            className={cn(
              "flex items-center space-x-3 border p-4 rounded-lg cursor-pointer transition-all hover:bg-accent hover:text-accent-foreground",
              selected === opt
                ? "border-primary bg-primary/10 ring-1 ring-primary"
                : "border-input bg-card",
            )}
          >
            <input
              type="radio"
              name={`choice-${task.id}`}
              className="h-4 w-4 border-primary text-primary focus:ring-primary accent-primary"
              onChange={() => {
                setSelected(opt);
                setFeedback(null);
              }}
              checked={selected === opt}
            />
            <span className="text-sm font-medium">{opt}</span>
          </label>
        ))}
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-2">
        <Button onClick={handleCheck} disabled={!selected}>
          Zatwierdź odpowiedź
        </Button>

        {feedback === "correct" && (
          <div className="flex items-center text-green-600 dark:text-green-400 font-medium animate-in fade-in slide-in-from-left-2">
            <CheckCircle2 className="w-5 h-5 mr-2" />
            Świetnie!
          </div>
        )}
        {feedback === "wrong" && (
          <div className="flex items-center text-destructive font-medium animate-in fade-in slide-in-from-left-2">
            <XCircle className="w-5 h-5 mr-2" />
            Niestety, spróbuj ponownie.
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
