import React from 'react'

const Other = () => {
    const detailItems = [
        {
          iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/919f8cda20354af49431d544ec0e68347d998cb51cc5ef006169cf309ebf3afc?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
          iconAlt: "Resume PDF icon",
          title: "Resume PDF",
          description: "David_Omitoyin Resume",
        },
        {
          iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/84ea74ad8f381b03ab898dc53a0f47456ba6ae37eb8ec4a1d114d0e9847b3701?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
          iconAlt: "Location icon",
          title: "Location",
          description: "Nigeria, Oyo State",
        },
        {
          iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/56c53765577f7431b778110d30dc53a6d88324f4573d5c35731fa272d601082a?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
          iconAlt: "LinkedIn icon",
          title: "Linkedln Profile",
          description: "Check Linkedln Profile",
        },
      ];
    function IconImage({ src, alt }) {
        return <img loading="lazy" src={src} alt={alt} className="w-10 mt-4 aspect-square" />;
      }
      
      function DetailItem({ iconSrc, iconAlt, title, description }) {
        return (
          <div className="flex gap-2.5 mt-4 text-xs">
            <IconImage src={iconSrc} alt={iconAlt} />
            <div className="flex flex-col my-auto">
              <div className="text-neutral-500">{title}</div>
              <div className="mt-2.5 font-medium text-zinc-600">{description}</div>
            </div>
          </div>
        );
      }
  return (
    <>
     <section className="py-5 pr-6 pl-3 bg-white rounded-md shadow max-w-[495px] max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[90%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10">
            <h2 className="text-sm font-medium text-neutral-700">Other Details</h2>
            <div className="flex gap-2.5 mt-3.5">
              <div className="flex flex-col items-center">
                <IconImage src={detailItems[0].iconSrc} alt={detailItems[0].iconAlt} />
                <IconImage src={detailItems[1].iconSrc} alt={detailItems[1].iconAlt} className="" />
              </div>
              <div className="flex flex-col my-auto text-xs text-neutral-500">
                <div>{detailItems[0].title}</div>
                <div className="mt-2.5 font-medium text-zinc-600">{detailItems[0].description}</div>
                <div className="mt-7">{detailItems[1].title}</div>
                <div className="mt-2.5 font-medium text-zinc-600">{detailItems[1].description}</div>
              </div>
            </div>
            <DetailItem
              iconSrc={detailItems[2].iconSrc}
              iconAlt={detailItems[2].iconAlt}
              title={detailItems[2].title}
              description={detailItems[2].description}
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[10%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-center mt-6 max-md:mt-10">
            <IconImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb91a60b23130c429219d08224792d932ecac01627d92614fc16ffd7f9cc31b3?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&" alt="Icon 4" />
            <IconImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb91a60b23130c429219d08224792d932ecac01627d92614fc16ffd7f9cc31b3?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&" alt="Icon 5" className="mt-20 max-md:mt-10" />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Other

