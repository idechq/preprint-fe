import React from 'react';

import { PdfLoader, PdfHighlighter, Tip, Highlight, AreaHighlight, Popup } from 'react-pdf-highlighter';
import type { IHighlight, NewHighlight } from "react-pdf-highlighter";
import { Sidebar } from "./Sidebar";

//react-PDF-highlighter playground

const testHighlights = {
  "https://arxiv.org/pdf/1604.02480.pdf": [
    {
      content: {
        text: "SSA",
      },
      position: {
        boundingRect: {
          x1: 816.4599609375,
          y1: 360.1875,
          x2: 848.4677734375,
          y2: 380.1875,
          width: 1019.9999999999999,
          height: 1319.9999999999998,
        },
        rects: [
          {
            x1: 816.4599609375,
            y1: 360.1875,
            x2: 848.4677734375,
            y2: 380.1875,
            width: 1019.9999999999999,
            height: 1319.9999999999998,
          },
        ],
        pageNumber: 1,
      },
      comment: {
        text: "Static Single Assignment",
        emoji: "",
      },
      id: "29668244118038056",
    },
  ],
};



type annotationCommentType = {
 comment: {
    text: string,
    emoji: string,
  }
}

const getNextId = () => String(Math.random()).slice(2);

const parseIdFromHash = () =>
  document.location.hash.slice("#highlight-".length);

const resetHash = () => {
  document.location.hash = "";
};

const HighlightPopup = ({ comment }: annotationCommentType) => {
  if (comment.text) {
    return (
      <div>
        {comment.text}
      </div>
    )} else { return null }
}

const PRIMARY_PDF_URL = "https://arxiv.org/pdf/1604.02480.pdf";
const initialUrl = PRIMARY_PDF_URL;

function ArticleCanvas () {

  const [articleURL, setArticleURL] = React.useState<string>(initialUrl)
  const [articleHighlights, updateArticleHighlights] = React.useState< Array<IHighlight> >(
    testHighlights[initialUrl]
  )
  const resetHighlights = () => {
    updateArticleHighlights([])
  };

  const getHighlightById = (id: string) => {
    const highlights = articleHighlights;
    return highlights.find((highlight) => highlight.id === id);
  }

  const addHighlight = (highlight: NewHighlight) => {
    const highlights = articleHighlights;
    console.log("Saving highlight", highlight);
    updateArticleHighlights([{ ...highlight, id: getNextId() }, ...highlights]);
  }

  let scrollViewerTo = (highlight: any) => {};

  const scrollToHighlightFromHash = () => {
    const highlight = getHighlightById(parseIdFromHash());
    if (highlight) {
      scrollViewerTo(highlight);
    }
  };

  const componentDidMount = () => {
    window.addEventListener(
      "hashchange",
      scrollToHighlightFromHash,
      false
    );
  }

  return (
    <React.Fragment>
          <PdfLoader url={articleURL} beforeLoad={<div>Loading...</div>}>
            {(pdfDocument) => (
              <PdfHighlighter
                pdfDocument={pdfDocument}
                enableAreaSelection={(event) => event.altKey}
                onScrollChange={resetHash}
                pdfScaleValue="auto"
                scrollRef={(scrollTo) => {
                  scrollViewerTo = scrollTo;
                  scrollToHighlightFromHash();
                }}
                onSelectionFinished={(
                  position,
                  content,
                  hideTipAndSelection,
                  transformSelection
                ) => (
                  <Tip
                    onOpen={transformSelection}
                    onConfirm={(comment) => {
                      addHighlight({ content, position, comment });

                      hideTipAndSelection();
                    }}
                  />
                )}
                highlightTransform={(
                  highlight,
                  index,
                  setTip,
                  hideTip,
                  viewportToScaled,
                  screenshot,
                  isScrolledTo
                ) => {
                  const isTextHighlight = !Boolean(
                    highlight.content && highlight.content.image
                  );

                  const component = isTextHighlight ? (
                    <Highlight
                      isScrolledTo={isScrolledTo}
                      position={highlight.position}
                      comment={highlight.comment}
                    />
                  ) : (<></>);

                  return (
                    <Popup
                      popupContent={<HighlightPopup {...highlight} />}
                      onMouseOver={(popupContent) =>
                        setTip(highlight, (highlight) => popupContent)
                      }
                      onMouseOut={hideTip}
                      key={index}
                      children={component}
                    />
                  );
                }}
                highlights={articleHighlights}
              />
            )}
          </PdfLoader>
  
        {/* </Grid>
      </Grid> */}
    </React.Fragment>
  )


}


