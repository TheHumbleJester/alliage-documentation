import React, { useState } from "react";
import DiffView from "react-diff-viewer";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/github";

type Props = {
  fileName?: string;
  current: string;
  next?: string;
  lang: string;
  split?: true;
  fold?: true;
};

const overridenTheme = {
  ...theme,
  plain: {
    ...theme.plain,
    backgroundColor: "rgba(0,0,0,0)",
  },
};

function renderHighlightedCode(str: string, lang: string) {
  return <Highlight
  {...defaultProps}
  theme={overridenTheme as any}
  code={str}
  language={lang as any}
>
  {({
    className,
    style,
    tokens,
    getLineProps,
    getTokenProps,
  }) => (
    <pre className={className} style={style}>
      {tokens.map((line, i) => (
        <div {...getLineProps({ line, key: i })}>
          {line.map((token, key) => (
            <span {...getTokenProps({ token, key })} />
          ))}
        </div>
      ))}
    </pre>
  )}
</Highlight>
}

export function Code({ current, next, fileName, lang, split, fold }: Props) {
  const hideLineNumbers = !next;
  const [isSplit, setIsSplit] = useState(!!split);
  return (
    <div
      style={{
        backgroundColor: theme.plain.backgroundColor,
        borderRadius: fileName && "0.25rem 0.25rem 0 0",
        margin: "3.5rem 0",
      }}
    >
      {fileName && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fff",
            border: `1px solid ${theme.plain.backgroundColor}`,
            borderRadius: "0.25rem 0.25rem 0 0",
            fontSize: "0.875rem",
            padding: "0.5rem",
          }}
        >
          <span>{fileName}</span>
          {next && (
            <button
              style={{
                padding: "0.3rem 0.5rem",
                backgroundColor: "#cc9779",
                color: "#fff",
                border: "none",
                outline: "none",
                borderRadius: "0.25rem",
                cursor: "pointer",
              }}
              onClick={() => setIsSplit(!isSplit)}
            >
              {isSplit ? "Unified" : "Split"}
            </button>
          )}
        </div>
      )}
      <div
        style={{
          padding: `1rem ${next ? "0" : "1rem"}`,
          overflowX: "auto",
          fontSize: '0.875rem',
        }}
      >
        {
          next ?
          <DiffView
            oldValue={require(`../code-samples/${current}`).default}
            newValue={require(`../code-samples/${next}`).default}
            splitView={isSplit}
            showDiffOnly={!!fold}
            hideLineNumbers={hideLineNumbers}
            disableWordDiff
            styles={{
              variables: {
                light: {
                  diffViewerBackground: theme.plain.backgroundColor,
                },
              },
            }}
            renderContent={(str) => {
              return !str ? (
                <div></div>
              ) : (
                renderHighlightedCode(str, lang)
              );
            }}
          />
          : renderHighlightedCode(require(`../code-samples/${current}`).default, lang)
        }
      </div>
    </div>
  );
}
