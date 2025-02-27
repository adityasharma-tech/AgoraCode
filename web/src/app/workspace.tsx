import { useNavigate, useParams } from "react-router";
import DragDivider from "../components/workspace/drag-divider";
import DirectorySection from "../components/workspace/directory-section";
import CodeSection from "../components/workspace/code-section";

export default function Workspace() {
  const navigate = useNavigate();
  const { id } = useParams();

  // 0b0e14
  if (!id) navigate("/");
  return (
    <DragDivider
      className="w-screen h-screen bg-[#0b0e14]"
      element1={<DirectorySection workspaceTitle={"Git & Github Part 2"}/>}
      element2={<CodeSection />}
    />
  );
}
