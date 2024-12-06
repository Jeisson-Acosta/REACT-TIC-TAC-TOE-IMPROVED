export function Square ({children, index, updateBoard, isSelected}) {

    const className = isSelected ? 'square selected' : 'square'

    const handleClick = () => {
  
      updateBoard(index)
    }
  
    return (
      <div className={className} onClick={handleClick}>
        {children}
      </div>
    )
}