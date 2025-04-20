import { japaneseFonts, latinFonts } from "@/lib/fonts";
import React from "react";

interface FontSelectorProps {
  latinFont: string;
  onLatinFontChange: (value: string) => void;
  japaneseFont: string;
  onJapaneseFontChange: (value: string) => void;
  enablePalt: boolean;
  onEnablePaltChange: (value: boolean) => void;
  enableYakuhanJp: boolean;
  onEnableYakuhanJp: (value: boolean) => void;
}

export const FontSelector: React.FC<FontSelectorProps> = ({
  latinFont,
  onLatinFontChange,
  japaneseFont,
  onJapaneseFontChange,
  enablePalt,
  onEnablePaltChange,
  enableYakuhanJp,
  onEnableYakuhanJp,
}) => {
  return (
    <div className="space-y-2">
      <div>
        <label htmlFor="latinFont" className="block text-sm font-medium mb-1">
          欧文フォント
        </label>
        <select
          id="latinFont"
          className="w-full p-2 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          value={latinFont}
          onChange={(e) => onLatinFontChange(e.target.value)}
        >
          {latinFonts.map((font) => (
            <option key={font.value} value={font.value}>
              {font.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="japaneseFont"
          className="block text-sm font-medium mb-1"
        >
          和文フォント
        </label>
        <select
          id="japaneseFont"
          className="w-full p-2 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          value={japaneseFont}
          onChange={(e) => onJapaneseFontChange(e.target.value)}
        >
          {japaneseFonts.map((font) => (
            <option key={font.value} value={font.value}>
              {font.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">設定</label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2 p-2 border rounded shadow-sm">
            <input
              type="checkbox"
              id="paltToggle"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              checked={enablePalt}
              onChange={(e) => onEnablePaltChange(e.target.checked)}
            />
            <label htmlFor="paltToggle" className="text-sm font-medium">
              文字詰めを有効にする
            </label>
          </div>

          <div className="flex items-center space-x-2 p-2 border rounded shadow-sm">
            <input
              type="checkbox"
              id="yakuhanJpToggle"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              checked={enableYakuhanJp}
              onChange={(e) => onEnableYakuhanJp(e.target.checked)}
            />
            <label htmlFor="yakuhanJpToggle" className="text-sm font-medium">
              記号を詰める（YakuhanJpを有効にする）
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
