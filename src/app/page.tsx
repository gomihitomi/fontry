"use client";

import { FontSelector } from "@/components/FontSelector";
import { MarkdownInput } from "@/components/MarkdownInput";
import { PreviewArea } from "@/components/PreviewArea";
import { createFontLink } from "@/lib/fonts";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [markdown, setMarkdown] = useState(
    "# ✏️Hello Fontry!\n\nこれは**マークダウン**の*サンプル*です。\n\n「この家は、ひとりで踊るには広すぎる。」\n\nEnglish text for testing: The quick brown fox jumps over the lazy dog."
  );
  const [latinFont, setLatinFont] = useState("");
  const [japaneseFont, setJapaneseFont] = useState("");
  const [enablePalt, setEnablePalt] = useState(true);
  const [enableYakuhanJp, setEnableYakuhanJp] = useState(true);

  useEffect(() => {
    const loadFont = (fontName: string) => {
      const linkUrl = createFontLink(fontName);
      if (linkUrl && !document.querySelector(`link[href="${linkUrl}"]`)) {
        const link = document.createElement("link");
        link.href = linkUrl;
        link.rel = "stylesheet";
        document.head.appendChild(link);
      }
    };

    loadFont(latinFont);
    loadFont(japaneseFont);
  }, [latinFont, japaneseFont]);

  const getFontFamilyStyle = (): React.CSSProperties => {
    const fonts = [];
    if (enableYakuhanJp) fonts.push("YakuHanJP");
    if (latinFont) fonts.push(`'${latinFont}'`);
    if (japaneseFont) fonts.push(`'${japaneseFont}'`);
    fonts.push("sans-serif");

    return {
      fontFamily: fonts.join(", "),
      ...(enablePalt && { fontFeatureSettings: "'palt'" }),
    };
  };

  const previewStyle = getFontFamilyStyle();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Fontry - Google Font Previewer
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <MarkdownInput value={markdown} onChange={setMarkdown} />
        <FontSelector
          latinFont={latinFont}
          onLatinFontChange={setLatinFont}
          japaneseFont={japaneseFont}
          onJapaneseFontChange={setJapaneseFont}
          enablePalt={enablePalt}
          onEnablePaltChange={setEnablePalt}
          enableYakuhanJp={enableYakuhanJp}
          onEnableYakuhanJp={setEnableYakuhanJp}
        />
      </div>
      <PreviewArea markdown={markdown} style={previewStyle} />
    </main>
  );
}
