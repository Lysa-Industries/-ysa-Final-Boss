import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function TheoryView({ theory }) {
  if (!theory) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Teoria</CardTitle>
        <CardDescription>
          Zapoznaj się z zasadami gramatycznymi dla tego tematu.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <section>
          <h3 className="font-semibold text-lg mb-2">
            Budowa zdań twierdzących
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {theory.affirmative}
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg mb-2">Pytania i przeczenia</h3>
          <p className="text-muted-foreground leading-relaxed">
            {theory.questions} / {theory.negations}
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg mb-2">Wyjątki</h3>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            {theory.exceptions.map((ex, i) => (
              <li key={i}>{ex}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg mb-2">Przykłady</h3>
          <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
            {theory.examples.map((ex, i) => (
              <p key={i} className="text-sm italic text-muted-foreground">
                - {ex}
              </p>
            ))}
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
