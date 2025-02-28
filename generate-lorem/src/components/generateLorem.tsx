import React, { useState } from "react";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: { min: 3, max: 7 },
  wordsPerSentence: { min: 5, max: 20 },
});

type LoremType = "words" | "sentences" | "paragraphs";

const LoremIpsumGenerator: React.FC = () => {
  const [count, setCount] = useState<number>(5);
  const [type, setType] = useState<LoremType>("paragraphs");
  const [output, setOutput] = useState<string[]>([]);

  const generateLoremIpsum = () => {
    let generatedText: string[];

    if (type === "words") {
      generatedText = [lorem.generateWords(count)];
    } else if (type === "sentences") {
      generatedText = Array.from({ length: count }, () => lorem.generateSentences(1));
    } else {
      generatedText = Array.from({ length: count }, () => lorem.generateParagraphs(1));
    }

    if (count === 0) {
      setOutput([]);
      return;
    }

    setOutput(generatedText);
  };
  const clearOutput = () => {
    setOutput([]);
  };

  return (
    <div className="p-3 mt-10">
        <div className="p-4 container mx-auto bg-slate-100 shadow-md rounded-md">
            <h1 className="text-2xl font-semibold mb-3">Lorem Ipsum Generator</h1>

            <label className="block text-sm font-medium">Generate Type:</label>
            <select
                aria-label="type"
                value={type}
                onChange={(e) => setType(e.target.value as LoremType)}
                className="w-full p-2 border rounded mt-1 mb-3 bg-white cursor-pointer outline-none"
            >
                <option value="paragraphs">Paragraphs</option>
                <option value="sentences">Sentences</option>
                <option value="words">Words</option>
            </select>

            <label className="block text-sm font-medium">Number of {type}:</label>
            <input
                aria-label="number"
                type="number"
                value={count}
                onChange={(e) => setCount(Math.max(1, Number(e.target.value)))}
                className="w-full p-2 border rounded mt-1 mb-3 bg-white outline-none"
            />

            <div className="flex gap-6">
                <button
                    onClick={generateLoremIpsum}
                    className="w-full bg-blue-500 text-white py-2 rounded mt-3 hover:bg-blue-600 cursor-pointer"
                >
                    Generate
                </button>
                <button
                    onClick={clearOutput}
                    className="w-full bg-blue-500 text-white py-2 rounded mt-3 hover:bg-blue-600 cursor-pointer"
                >
                    clear
                </button>
            </div>

            {output.length > 0 && (
              <div 
              className="mt-4 p-3 bg-white rounded" onSubmit={generateLoremIpsum}
            >
                {output.map((text, i) => <p key={i} className="mb-2">{text}</p>)}
            </div>
            )}
        </div>
    </div>
  );
};

export default LoremIpsumGenerator;
