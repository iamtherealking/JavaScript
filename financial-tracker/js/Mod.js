export const template = function(desc,type,money){
    return(
    `
     <tr class="${type}">
		<td>${desc}</td>
		<td>${type}</td>
		<td class="amount">$${money}</td>
		<td class="tools">
			<i class="delete fa fa-trash-o"></i>
		</td>
	 </tr>
    `
    )
 }
 
  