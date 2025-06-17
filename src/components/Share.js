import { forwardRef, useImperativeHandle, useState } from "react";
import Modal from "./Modal";
import { YOUTUBE_WATCH_URL } from "../utils/constants";
import { showError, showMessageInfo, showSuccess } from "../utils/toast";
import ShareButtons from "./ShareButtons";

const Share = forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoLink = YOUTUBE_WATCH_URL + props.videoId;

  const handleClose = () => {
    setIsModalOpen(false);
  };
  useImperativeHandle(ref, () => ({
    open: () => {
      setIsModalOpen(true);
    },
    close: () => {
      handleClose();
    },
  }));
  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(videoLink);
      showMessageInfo("Copied to clipboard");
    } catch (err) {
      showError("Failed to copy!");
    }
  };
  return (
    <div>
      <Modal onClose={handleClose} isOpen={isModalOpen} size="md">
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div className="p-2">
            <h2 className="pb-2">Share</h2>
            {/* share in social media */}
            <ShareButtons url={videoLink} />

            <div className="p-2 flex border border-gray-300 gap-2 rounded-lg items-center">
              <span className="overflow-scroll hide-scrollbar whitespace-nowrap w-4/5">
                {videoLink}
              </span>
              <button
                className="bg-[#0b57d0] text-white px-4 py-2 rounded-full hover:bg-[#5f8edaf9] cursor-pointer disabled:bg-gray-300"
                onClick={handleCopyUrl}
              >
                Copy
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
});

export default Share;
