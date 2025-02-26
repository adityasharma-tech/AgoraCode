import { useNavigate, useParams } from "react-router";

export default function Workspace() {
  const navigate = useNavigate();
  const { id } = useParams();

  
  if (!id) navigate("/");
  return <main className="w-screen h-screen bg-[#0b0e14] flex flex-col">
    <div></div>
    <div></div>
    <div></div>
  </main>;
}
