import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            "group toast glass !rounded-sm !border-0 !text-foreground !text-xs !tracking-wider",
          description: "!text-muted-foreground !text-xs",
          actionButton:
            "!bg-accent !text-accent-foreground",
          cancelButton:
            "!bg-muted !text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster, toast }
