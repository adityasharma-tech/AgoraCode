import { PropsWithChildren } from "react";
import DragDivider from "./drag-divider";
import OpenFileTabs from "./open-file-tabs";
import { defaultCodeContent } from "../../lib/constants";

export default function CodeSection() {
  return (
    <section>
      <DragDivider
        horizontal
        element1={
        <div>
          <OpenFileTabs/>
          <CodeFileContent content={defaultCodeContent}/>
        </div>
        }
        element2={<div>terminal</div>}
      />
    </section>
  );
}

function CodeFileContent({content}: PropsWithChildren<{content: string;}>) {
  return (
    <div style={{
      whiteSpace: 'pre-wrap',
      fontFamily: "JetBrains Mono, monospace",
    }}>
      {content}
    </div>
  );
}
