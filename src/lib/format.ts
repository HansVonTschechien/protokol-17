export function formatCaseNumber(number: number) {
  return String(number).padStart(2, "0");
}

export function caseHref(id: string) {
  return `/pripady/${id.replaceAll("_", "-")}`;
}

export function parseCaseParam(param: string) {
  return param.replaceAll("-", "_");
}
