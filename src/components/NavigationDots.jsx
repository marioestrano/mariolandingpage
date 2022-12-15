
export const NavigationDots = ({ active }) => {


  // const list = ['home','about','work','skills', 'testimonial', 'contact'];
  const list = ['home','about','work','skills'];
  return (
    <div className="app__navigation">
      {list.map( (item, index) => (
        
        <a 
          href={`#${item}`}
          key={ item + index} 
          className="app__navigation-dot"
          style={active === item ? {backgroundColor: '#313BAC' } : {}}/>
          )
    )}

    </div>
  )
}
