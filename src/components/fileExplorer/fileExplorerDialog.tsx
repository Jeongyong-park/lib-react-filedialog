import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  Toolbar,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import { FileExplorer, IFileManagerData } from ".";
import IFileInfo from "./IFileInfo";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      margin: theme.spacing(1),
      "&>*": {
        margin: theme.spacing(0.5, 1),
      },
    },
  })
);

interface FileExplorerDialogProps {
  open: boolean;
  onClose: (selectedFile: IFileInfo | null) => void;
  title?: string;
  fileManagerData: IFileManagerData;
  defaultPath?: string;
  onChangedPath: (path: string) => void;
}

export const FileExplorerDialog = ({
  title,
  open,
  onClose,
  onChangedPath,
  fileManagerData,
}: FileExplorerDialogProps) => {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = React.useState<IFileInfo | null>(
    null
  );

  const handleClickCancelClose = () => {
    onClose(null);
  };
  const handleClickOkClose = () => {
    if (selectedFile) {
      onClose(selectedFile);
    } else {
      //TODO 파일이 선택되지 않음 경고!
    }
  };

  const onSelectionChangeHandler = (rows: IFileInfo[]) => {
    if (rows.length === 0) {
      setSelectedFile(null);
    } else {
      setSelectedFile(rows[0]);
    }
  };
  return (
    <Dialog
      open={open}
      onClose={handleClickCancelClose}
      aria-labelledby="form-dialog-title"
      maxWidth="md"
    >
      <DialogTitle id="form-dialog-title">{title || "파일 선택"}</DialogTitle>
      <DialogContent style={{ padding: 0, overflow: "hidden" }}>
        <FileExplorer
          height={450}
          onSelectionChange={onSelectionChangeHandler}
          onSelectAndDialogClose={handleClickOkClose}
          fileManagerData={fileManagerData}
          onChangedPath={onChangedPath}
        />
        <Toolbar className={classes.toolbar}>
          <Typography variant="body2">파일명:</Typography>
          <TextField
            style={{ flexGrow: 2 }}
            variant="outlined"
            size="small"
            value={selectedFile?.name || ""}
          />
        </Toolbar>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClickCancelClose} color="primary">
          취소
        </Button>
        <Button
          variant="contained"
          onClick={handleClickOkClose}
          color="primary"
        >
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FileExplorerDialog;
