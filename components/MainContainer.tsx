interface MainContainerProps {
    children: React.ReactNode;
}

const MainContainer = ({
    children,
}: MainContainerProps) => {
  return (
    <div className="px-2 sm:px-4 md:px-10 lg:px-14 xl:px-16 2xl:px-24">
      {children}
    </div>
  )
}

export default MainContainer