import "./styles.css";
import {
  FileExplorerDialog,
  IFileManagerData,
} from "./components/fileExplorer";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState<boolean>(true);
  const [fileManagerData, setfileManagerData] = useState<IFileManagerData>({
    currentBasePath: "",
    currentFilelist: [],
    homeDir: "/",
    userDirs: {
      documents: "",
      music: "",
      pictures: "",
      videos: "",
    },
  });
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <FileExplorerDialog
        title="test"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onChangedPath={(path) => {
          // Axios.get(~~)
          //TODO setfileManagerData();
        }}
        fileManagerData={fileManagerData}
      />
    </div>
  );
}
