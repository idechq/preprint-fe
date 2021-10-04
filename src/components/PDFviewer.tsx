// https://react-pdf-viewer.dev/examples/create-a-toolbar-with-different-slots-for-the-default-layout/

import { Viewer, Worker } from "@react-pdf-viewer/core";
import {
  defaultLayoutPlugin,
  ToolbarProps,
  ToolbarSlot,
} from "@react-pdf-viewer/default-layout";
import { RotateDirection } from "@react-pdf-viewer/rotate";
import useMediaQuery from "@mui/material/useMediaQuery";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import theme from "../styles/theme";

import {
  ArticleInfoItems,
  ArticleTeamInfoItems,
} from "./ArticleDrawerContents";

type PDFViewerProps = {
  articleHref: string;
  defaultScale?: number;
};

export default function PDFViewer({
  articleHref,
  defaultScale,
}: PDFViewerProps) {
  const above600pxScreen = useMediaQuery("(min-width:600px)");
  const aboveLgScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const aboveMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const aboveSmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const aboveXsScreen = useMediaQuery(theme.breakpoints.up("xs"));
  const autoScale = () => {
    if (aboveLgScreen) {
      return 1.5;
    } else if (aboveMdScreen) {
      return 1;
    } else if (aboveSmScreen) {
      return 0.8;
    } else if (aboveXsScreen) {
      return 0.7;
    } else {
      return undefined;
    }
  };

  const renderToolbar = (
    Toolbar: (props: ToolbarProps) => React.ReactElement
  ) => (
    <Toolbar>
      {(slots: ToolbarSlot) => {
        const {
          CurrentPageInput,
          EnterFullScreen,
          Download,
          GoToNextPage,
          GoToPreviousPage,
          NumberOfPages,
          Print,
          Rotate,
          ShowSearchPopover,
          ShowProperties,
          SwitchTheme,
          Zoom,
          ZoomIn,
          ZoomOut,
        } = slots;
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ alignItems: "center", display: "flex" }}>
              <div>
                <ShowSearchPopover />
              </div>
              <div>
                <GoToPreviousPage />
              </div>
              <div style={{ height: "30px", width: "40px" }}>
                <CurrentPageInput />
              </div>
              <div style={{ padding: "0px 2px 0px 6px" }}>
                <span style={{ fontSize: "15px" }}>
                  / <NumberOfPages />{" "}
                </span>
              </div>
              <div style={{ padding: "0px 2px" }}>
                <GoToNextPage />
              </div>
            </div>

            <div style={{ alignItems: "center", display: "flex" }}>
              <div style={{ padding: "0px 2px" }}>
                <ZoomOut />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <Zoom />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <ZoomIn />
              </div>
            </div>

            <div
              style={
                above600pxScreen
                  ? { alignItems: "center", display: "flex" }
                  : { display: "none" }
              }
            >
              <div style={{ padding: "0px 4px" }}></div>
              <div style={{ padding: "0px 2px" }}>
                <Download />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <Rotate direction={RotateDirection.Forward} />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <SwitchTheme />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <EnterFullScreen />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <Print />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <ShowProperties />
              </div>
            </div>
          </div>
        );
      }}
    </Toolbar>
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
    sidebarTabs: (defaultTabs) => [
      // Remove the attachments tab (\`defaultTabs[2]\`)
      defaultTabs[0], // Bookmarks tab
      defaultTabs[1], // Thumbnails tab
    ],
  });

  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <Viewer
          fileUrl={articleHref}
          plugins={[defaultLayoutPluginInstance]}
          defaultScale={defaultScale ? defaultScale : autoScale()}
        />
      </Worker>
    </>
  );
}
