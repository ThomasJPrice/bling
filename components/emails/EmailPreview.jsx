const EmailPreview = ({ children }) => {
  return (
    <>
      <div className="hidden max-h-0 overflow-hidden">
        {children}
      </div>

      <div className="hidden max-h-0 overflow-hidden">
        &#847; &zwnj; &nbsp; &#8199; &shy; &#847; &zwnj; &nbsp; &#8199; &shy; &#847; &zwnj; &nbsp; &#8199; &shy; &#847; &zwnj; &nbsp; &#8199; &shy; &#847; &zwnj; &nbsp; &#8199; &shy; &#847; &zwnj; &nbsp; &#8199; &shy; &#847; &zwnj; &nbsp; &#8199; &shy; &#847; &zwnj; &nbsp; &#8199; &shy;
      </div>
    </>
  )
}

export default EmailPreview