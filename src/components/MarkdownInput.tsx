import React from "react";

interface MarkdownInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const MarkdownInput: React.FC<MarkdownInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor="markdownInput" className="block text-sm font-medium mb-1">
        入力値
      </label>
      <textarea
        id="markdownInput"
        rows={10}
        className="w-full p-2 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 font-mono"
        placeholder="ここにテキスト、またはマークダウンを入力してください"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
