import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type TicketModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  embedUrl: string;
};

const TicketModal = ({ open, onOpenChange, title, embedUrl }: TicketModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-4xl p-0 overflow-hidden border-0 bg-white">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-xl font-black text-[#111111]">
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="px-6 pb-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
            <iframe
              src={embedUrl}
              title={title}
              className="w-full"
              style={{ height: "75vh", minHeight: "650px", border: "0" }}
              loading="lazy"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TicketModal;
