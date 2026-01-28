interface ContainerProps {
    children: React.ReactNode;
}

const Container = ({
    children,
}: ContainerProps) => {
  return (
    <div className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-16">
      {children}
    </div>
  )
}

export default Container