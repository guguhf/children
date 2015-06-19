/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'sym-logo'
   (function(symbolName) {   
   
   })("sym-logo");
   //Edge symbol end:'sym-logo'

   //=========================================================
   
   //Edge symbol: 'sym-welcome'
   (function(symbolName) {   
   
   })("sym-welcome");
   //Edge symbol end:'sym-welcome'

   //=========================================================
   
   //Edge symbol: 'sym-page1'
   (function(symbolName) {   
   
   })("sym-page1");
   //Edge symbol end:'sym-page1'

   //=========================================================
   
   //Edge symbol: 'sym-page2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${sym-page2-button}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.$("sym-page2-popup").show();
         

      });
      //Edge binding end

   })("sym-page2");
   //Edge symbol end:'sym-page2'

   //=========================================================
   
   //Edge symbol: 'sym-page2-button'
   (function(symbolName) {   
   
   })("sym-page2-button");
   //Edge symbol end:'sym-page2-button'

   //=========================================================
   
   //Edge symbol: 'sym-page2-popup'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${sym-page2-popup-close}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("sym-page2-popup");
   //Edge symbol end:'sym-page2-popup'

   //=========================================================
   
   //Edge symbol: 'sym-page2-popup-close'
   (function(symbolName) {   
   
   })("sym-page2-popup-close");
   //Edge symbol end:'sym-page2-popup-close'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-4782395");