function Price_LowerSort(PropA, PropB) { 
   const PricingA = Number(PropA.Price.slice(1))
   const PricingB = Number(PropB.Price.slice(1))
   return PricingA - PricingB
}

function Price_HighestSort(PropA, PropB) {
   const PricingA = Number(PropA.Price.slice(1))
   const PricingB = Number(PropB.Price.slice(1))
   return PricingB - PricingA
}

function Feet_LowerSort(PropA, PropB) { 
   const FeetA = PropA.Feet
   const FeetB = PropB.Feet
   return FeetA - FeetB
}

function Feet_HighestSort(PropA, PropB) {
   const FeetA = PropA.Feet
   const FeetB = PropB.Feet
   return FeetB - FeetA
}

function Beds_Filter(Information, Value, BackUp){
   let Sanitized_Info = Information.filter((el)=>el.Beds >= Value)
   console.log(Sanitized_Info.length)
   if (Sanitized_Info.length === 0) {
      Sanitized_Info = BackUp
   } else if (Sanitized_Info.length === Information.length){
      Sanitized_Info = BackUp.filter((el)=>el.Beds >= Value)
   }
   return Sanitized_Info;
}

function Baths_Filter(Information, Value, BackUp){

   let Sanitized_Info = Information.filter((el)=>el.Bath >= Value)
   if(BackUp.filter((el)=>el.Bath >= Value).length === 0){
      return Sanitized_Info
   }
   if (Sanitized_Info.length === 0) {
      Sanitized_Info = BackUp
   } else if (Sanitized_Info.length === Information.length){
      Sanitized_Info = BackUp.filter((el)=>el.Bath >= Value)
   }
   return Sanitized_Info;
}

function FilterSort (Filter, Information, BackUp){
   if(typeof Filter !== 'string'){
      return Information
   }
   if(Filter.includes('baths')){
      let Sanitized = Filter.split(',')[0]
      return Baths_Filter(Information, Sanitized, BackUp)
   }else if(Filter.includes('beds')){
      let Sanitized = Filter.split(',')[0]
      return Beds_Filter(Information, Sanitized, BackUp)
   }else{
      if (Filter === 'Higher') {
         return Information.sort(Price_HighestSort)
      }else if (Filter === 'Lower') {
         return Information.sort(Price_LowerSort)
      }else if (Filter === 'Large') {
         return Information.sort(Feet_HighestSort)
      }else if (Filter === 'Small') {
         return Information.sort(Feet_LowerSort)
      }
   }
   return Information
}

function FilterSort_Boolean(Filter, Information, BackUp) {
   console.log('Boolean Sort', Filter)
   let Sanitized_Info;
   if(Filter){
      Sanitized_Info = Information.filter((el)=>el.Status !== 'buy')
      if (Sanitized_Info.length === 0) {
         Sanitized_Info = BackUp.filter((el)=>el.Status !== 'buy')
      }
   } else {
      Sanitized_Info = Information.filter((el)=>el.Status !== 'Rent')
      if (Sanitized_Info.length === 0) {
         Sanitized_Info = BackUp.filter((el)=>el.Status !== 'Rent')
      }
   }
   return Sanitized_Info
}



export {
   FilterSort,
   FilterSort_Boolean
}