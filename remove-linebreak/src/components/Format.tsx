import { useState } from "react";

const MyComponent: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (e.target.value === "") {
      setOutput("");
    }else{
      setError("");
    }
  };

  const handleFormat = () => {
    const processedText = text
      .split("\n")
      .map(line => line.trim())
      .filter(line => line !== "")
      .join("\n");

    setOutput(processedText);
    if (processedText === "") {
      setError("No text to format");
    }
  };

  const handleFormatinline = () => {
    const processedText = text.replace(/(\r\n|\n|\r)/gm, " ");
    setOutput(processedText);
  };


  const clearOutput = () => {
    setOutput("");
    setText("");
  };

  return (
    <div className="p-3 mt-10">
      <div className="container p-4 mx-auto bg-slate-100 shadow-md rounded-md">
        <label 
          htmlFor="textarea"
          className="text-lg font-medium text-gray-900"
        >Input text here:</label>
        <textarea
          className="w-full p-3 bg-white outline-none border border-gray-300 rounded min-h-52 mt-2"
          aria-label="textarea"
          value={text}
          onChange={handleChange}
        />
        {error && <p className="text-red-500 text-lg font-semibold mt-1">{error}</p>}

        <div className="flex w-3/5 gap-6 mx-auto">
          <button
            onClick={handleFormat}
            className="w-full bg-blue-500 text-white py-2 rounded mt-3 hover:bg-blue-600 cursor-pointer"
          >
            Format
          </button>
          <button
            onClick={handleFormatinline}
            className="w-full bg-blue-500 text-white py-2 rounded mt-3 hover:bg-blue-600 cursor-pointer"
          >
            Format inline
          </button>
          <button
            onClick={clearOutput}
            className="w-full bg-blue-500 text-white py-2 rounded mt-3 hover:bg-blue-600 cursor-pointer"
          >
            Clear
          </button>
        </div>

          {output && (
            <div className="mt-4 rounded">
              <label 
                htmlFor="textarea"
                className="text-lg font-medium text-gray-900"
                >Result:</label>
                <textarea
                  className="w-full p-3 bg-white outline-none border border-gray-300 rounded min-h-52 mt-2"
                  aria-label="textarea"
                  value={output}
                  readOnly
                />
            </div>
          )}
      </div>
    </div>
  );
};

export default MyComponent;
