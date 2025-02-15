//Coordinates pattern matching regex

//DM with invalid minutes (goes to coords_other); this is just a shortened version of that to create a guard condition
const dm_invalid = /^(NORTH|NORTE|SOUTH|SUR|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|NORTE|SOUTH|SUR|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|ESTE|WEST|OESTE|[EWO])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|ESTE|WEST|OESTE|[EWO])?$/i;

//DM as numbers only - see issue #15
const dm_numbers = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/

//decimal degrees
const dd_re = /^(NORTH|NORTE|SOUTH|SUR|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d+)?)[\s]*([•º°]?)[\s]*(NORTH|NORTE|SOUTH|SUR|[NS])?[\s]*[,/;]?[\s]*(EAST|ESTE|WEST|OESTE|[EWO])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d+)?)[\s]*([•º°]?)[\s]*(EAST|ESTE|WEST|OESTE|[EWO])?$/i;

//degrees minutes seconds with '.' as separator - gives array with 15 values
const dms_periods = /^(NORTH|NORTE|SOUTH|SUR|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|NORTE|SOUTH|SUR|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|ESTE|WEST|OESTE|[EWO])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|ESTE|WEST|OESTE|[EWO])?$/i;

//degrees minutes seconds with words 'degrees, minutes, seconds' as separators (needed because the s of seconds messes with the S of SOUTH) - gives array of 17 values
const dms_abbr = /^(NORTH|NORTE|SOUTH|SUR|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|NORTE|SOUTH|SUR|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|ESTE|WEST|OESTE|[EWO])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|ESTE|WEST|OESTE|[EWO])?$/i;

//everything else - gives array of 17 values 
const coords_other = /^(NORTH|NORTE|SOUTH|SUR|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|NORTE|SOUTH|SUR|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|ESTE|WEST|OESTE|[EWO])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|ESTE|WEST|OESTE|[EWO])?$/i;

export {
  dm_invalid,
  dm_numbers,
  dd_re, 
  dms_periods,
  dms_abbr,
  coords_other
}