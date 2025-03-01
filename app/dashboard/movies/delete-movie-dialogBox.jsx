import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export default function DeleteMovieDialog({
  open,
  onCancel,
  movie,
  isLoading,
  onConfirm,
}) {
  return (
    <Dialog open={open} onOpenChange={onCancel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Movie</DialogTitle>
          <DialogDescription>
            Are your sure, you want to delete the movie <b>{movie.title}</b>?
            This action cannot be undo.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" disabled={isLoading} onClick={onCancel}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            disabled={isLoading}
            onClick={onConfirm}
          >
            Detele
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
