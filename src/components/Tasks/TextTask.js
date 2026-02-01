import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CheckCircle2, XCircle, Eye, EyeOff } from "lucide-react";

export default function TextTask({ task }) {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [showSolution, setShowSolution] = useState(false);

  const check = () => {
    if (!input) return;
    setFeedback(
      input.trim().toLowerCase() === task.answer.toLowerCase()
        ? "correct"
        : "wrong",
    );
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-lg leading-loose text-foreground">
          {task.text.split("____").map((part, i) => (
            <React.Fragment key={i}>
              {part}
              {i === 0 && (
                <div className="inline-block mx-2 w-48 relative -bottom-1">
                  <Input
                    className={`h-9 text-center font-medium transition-colors ${
                      feedback === "correct"
                        ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                        : feedback === "wrong"
                          ? "border-destructive bg-destructive/10 text-destructive"
                          : ""
                    }`}
                    value={input}
                    onChange={(e) => {
                      setInput(e.target.value);
                      setFeedback(null);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") check();
                    }}
                    placeholder="..."
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {showSolution && (
          <div className="mt-6 p-4 bg-primary/10 text-primary rounded-lg border border-primary/20 text-sm animate-in fade-in slide-in-from-top-2">
            Poprawna odpowiedź: <span className="font-bold">{task.answer}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-3 border-t bg-muted/50 p-4 items-center rounded-b-lg">
        <Button onClick={check} className="w-full sm:w-auto">
          Sprawdź
        </Button>
        <Button
          variant="outline"
          onClick={() => setShowSolution(!showSolution)}
          className="w-full sm:w-auto"
        >
          {showSolution ? (
            <>
              <EyeOff className="w-4 h-4 mr-2" /> Ukryj
            </>
          ) : (
            <>
              <Eye className="w-4 h-4 mr-2" /> Rozwiązanie
            </>
          )}
        </Button>

        <div className="flex-1 flex justify-center sm:justify-end items-center w-full sm:w-auto min-h-[24px]">
          {feedback === "correct" && (
            <div className="flex items-center text-green-600 dark:text-green-400 font-medium animate-in fade-in slide-in-from-left-2">
              <CheckCircle2 className="w-5 h-5 mr-2" />
              Świetnie!
            </div>
          )}
          {feedback === "wrong" && (
            <div className="flex items-center text-destructive font-medium animate-in fade-in slide-in-from-left-2">
              <XCircle className="w-5 h-5 mr-2" />
              Spróbuj ponownie
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
