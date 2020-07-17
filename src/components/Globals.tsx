export const SITE_URL = "https://cpf.vercel.app"

export const slug = (url: string) => {
  return url.toLocaleLowerCase().split(" ").join("-")
}

export const sectionData = (data: string) => {
  let segment = data.split("\n");
  let d1 = segment.map((x: any) => {
    var dx = x.split("|")
    var img = dx[0].replace("[", "").replace("]", "")
    var txt = dx[1]

    return {
      image: img,
      text: txt
    }
  })

  return d1;
}