import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../components/Sample"), {
  ssr: false,
});

export default function PDF() {
  return <PDFViewer />;
}
