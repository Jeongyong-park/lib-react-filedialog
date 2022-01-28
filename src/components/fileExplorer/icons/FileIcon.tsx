import { getIcon } from "material-file-icons";

interface FileIconProps {
  filename: string;
  style?: React.CSSProperties;
  className?: string;
}

export const FileIcon = (props: FileIconProps): React.ReactElement => {
  return (
    <div
      style={props.style}
      className={props.className}
      dangerouslySetInnerHTML={{ __html: getIcon(props.filename).svg }}
    />
  );
};
