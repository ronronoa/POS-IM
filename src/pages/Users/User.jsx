import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddUser from "./AddUser";

export default function User() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-2 md:p-4 rounded-md border">
        <h2 className="text-lg md:text-3xl font-bold">
          Users
        </h2>

        <div>
          <AddUser />
        </div>
      </div>
    </div>
  )
}
