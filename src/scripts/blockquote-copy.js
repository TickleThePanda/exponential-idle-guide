import {initialize_color_scheme} from './color-scheme.js'

function remove_char(text, char){
  var index = text.indexOf(char);
  while (index >= 0) {
    switch(index){
      case 0:
        text = text.slice(1);
        break;
      case text.length:
        text = text.slice(0,text.length-1);
        break;
      default:
        text = text.substr(0,index) + text.substr(index+1, text.length);
    }
    index = text.indexOf(char);
  }
  return text
}     

window.onload = ()=>{
  initialize_color_scheme();
  const blockquote_list = document.getElementsByTagName('blockquote');
  console.log(blockquote_list.length);
  for(const blockquote of blockquote_list){
    blockquote.innerHTML = blockquote.innerHTML.replaceAll(String.fromCharCode(0x00ad),"");
  }
}

function copyText(id){
  text = document.getElementById(id).innerText;
  text = remove_char(text, String.fromCharCode(10));
  try {
    navigator.clipboard.writeText(text);
    console.log('Copy Success: \n' + text);
  } catch (err) {
    console.log('Copy Failure: \n' + toString(err));
  }
}