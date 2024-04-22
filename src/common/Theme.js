// Custom theme color
const theme = {
    colors: {
      green:'#338573',
      lightGreen:'#66D4BC',
      white:'#FFF',
      black:'#000',
      shadGreen:'#ECFFFB',
      gradient: ['#3F5EFB', '#FC466B']
    },
    getGradientComponent: (style) => (
      <LinearGradient
        colors={theme.colors.gradient}
        style={style}
      />
    ),
  };
  
  export default theme;
  