import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const Causalfunnel = (): JSX.Element => {
  // Feature benefits data
  const featureBenefits = [
    {
      icon: "/successful-booking.svg",
      background: "#ff080833",
      text: "High Accuracy Intent Prediction",
    },
    {
      icon: "/discount.svg",
      background: "#b620e033",
      text: "Automated Personalized Nudges (offers)",
    },
    {
      icon: "/time-is-money.svg",
      background: "#fdd4024c",
      text: "Boosts Conversion By 40% On Average",
    },
    {
      icon: "/30-minutes-delivery.svg",
      background: "#6c63ff4c",
      text: "Works In Real-time To Convert Visitors",
    },
    {
      icon: "/youtuber.svg",
      background: "#00df7233",
      text: "Tested With 200 Million+ Visitors",
    },
  ];

  // How it works steps
  const workflowSteps = [
    {
      id: 1,
      color: "#6c63ff",
      title: "Identify Visitor",
      description:
        "Our ground-breaking DeepID tech is the industry's first cookie-less anonymous visitor identification.",
      image: "/path-461.svg",
    },
    {
      id: 2,
      color: "#ff0909",
      title: "Predict Intent",
      description:
        "Our proprietary AI models predict every visitor's intent to buy with great accuracy, only possible with our cookie-less DeepID.",
      image: "/undraw-grades-re-j7d6-1.svg",
    },
    {
      id: 3,
      color: "#fdd402",
      title: "Discover Persona",
      description:
        "Our behavior models help you discover the visitor persona, like discount buyers, convenience shoppers, impulse buyers, etc.",
      image: "/undraw-real-time-analytics-re-yliv-1.svg",
    },
    {
      id: 4,
      color: "#b620e0",
      title: "Targeted Offers",
      description:
        "Powered with buying intent and persona we show targeted offers to the visitors in real-time when they are about to abandon your site and lead them to convert.",
      image: "/group-16.png",
    },
  ];

  // Customer stories
  const customerStories = [
    {
      title: "Awesome Services",
      content:
        "CausalFunnel helps us analyze millions of visitors and provides insights into our user behavior across sessions and journeys. Their DeepID product is a game-changer to enhance the user experience for repeat visitors/users and even stitching sessions when cookies are wiped-out. Their team genuinely cares about optimizing user experience and conversions for organizations and goes above and beyond to make sure this happens.",
      author: "Rajat Agarwal",
      position: "VP, Engineering",
      logo: "/rectangle-332.png",
    },
    {
      title: "We have a great tool!",
      content:
        "We serve two types of persona and didn't know how many of our visitors classify in each of them. CF's AI used the visitor behavior and gave us details about how many of each persona type were we getting.",
      author: "Umair Tazeem",
      position: "CEO & Co-founder",
      logo: "/rectangle-334.png",
    },
    {
      title: "We have a great tool!",
      content:
        "We serve two types of persona and didn't know how many of our visitors classify in each of them. CF's AI used the visitor behavior and gave us details about how many of each persona type were we getting.",
      author: "Dr. Erson Religioso",
      position: "Founder",
      logo: "/rectangle-336.png",
    },
  ];

  // News updates
  const newsUpdates = [
    {
      title: "VDOSH Makes Investment in CausalFunnel",
      logo: "/vdosh-logo-1.png",
      background: "/rectangle-337.svg",
    },
    {
      title:
        "CausalFunnel named Top 50 AI CEOs of 2021 by Technology Innovators Magazine.",
      logo: "/technlogy-innovators-logo-1.png",
      background: "/rectangle-339.svg",
    },
    {
      title:
        "CausalFunnel invited to the Fast Company Executive Board for our industry expertise.",
      logo: "/svg-1-1.png",
      background: "/rectangle-340.svg",
    },
  ];

  // Case studies data
  const caseStudies = [
    {
      logo: "/californiafurniturestore--1--2.png",
      metric: "200%",
      description: "Increase in conversion",
    },
    {
      logo: "/group-23.png",
      metric: "302%",
      description: "Increase in conversion",
    },
    {
      logo: "/simplyshoes-logo--1--1.png",
      metric: "8X",
      description: "Increase in orders",
    },
    {
      logo: "/ems-logo-1.png",
      metric: "3.8X",
      description: "Increase in orders",
    },
  ];

  // Client logos
  const clientLogos = [
    "/californiafurniturestore--1--3.png",
    "/svg-1.png",
    "/svg-20.svg",
    "/ems-logo-3.png",
    "/cherishx-logo-website-1.png",
  ];

  // Social media icons
  const socialIcons = [
    { icon: "/vector-4.svg", alt: "Facebook" },
    { icon: "/group.png", alt: "Twitter" },
    { icon: "/vector-5.svg", alt: "Instagram" },
    { icon: "/vector-19.svg", alt: "LinkedIn" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        {/* Header/Navigation */}
        <header className="flex items-center justify-between px-20 py-7">
          <div className="flex items-center">
            <div className="relative w-[182px] h-7">
              <img
                className="absolute w-[29px] h-7 top-0 left-0"
                alt="Logo"
                src="/group-1.png"
              />
              <img
                className="absolute w-[146px] h-[17px] top-[5px] left-[35px]"
                alt="Causal funnel"
                src="/causalfunnel.svg"
              />
            </div>
          </div>

          <nav className="flex items-center gap-8">
            <div className="text-black text-[15px] font-normal">Platform</div>
            <div className="text-black text-[15px] font-normal">Company</div>
            <div className="text-black text-[15px] font-normal">Blog</div>
            <Button className="bg-[#0f3267] text-white text-sm font-medium rounded-lg h-[34px]">
              FREE TRIAL
            </Button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex flex-row px-20 mt-4 gap-16">
          <div className="relative w-[565px] h-[500px]">
            <div className="absolute w-[547px] h-[500px] top-0 left-0 bg-[#e4faff] rounded-[20px]" />
            <div className="absolute w-[490px] top-[228px] left-[34px] font-normal text-neutral-700 text-lg leading-7">
              Uncover The Hidden Value Of Your Anonymous
              <br />
              visitors With Our Disruptive Cookie-less Ai Technology.
            </div>
            <div className="absolute w-[531px] top-[72px] left-[34px] [font-family:'Poppins',Helvetica] font-medium text-[#00255e] text-[37px] leading-[45px]">
              {" "}
              <br />
              predicting Buying Intent In The Post Cookie World
            </div>
            <Button className="absolute w-[151px] h-[45px] top-[322px] left-[34px] bg-[#00255e] rounded-lg shadow-[0px_4px_4px_#00000040] text-white text-[17px] font-medium">
              Start Free Trial
            </Button>
          </div>

          <div className="relative w-[399px] h-[318px] mt-20">
            {/* Complex illustration - keeping original structure */}
            <div className="absolute w-[399px] h-[318px] top-0 left-0">
              <div className="absolute w-[116px] h-[317px] top-0 left-[262px]">
                <div className="relative h-[317px]">
                  <img
                    className="absolute w-[26px] h-[41px] top-[277px] left-[63px]"
                    alt="Group"
                    src="/group-10.png"
                  />
                  <img
                    className="absolute w-[26px] h-[41px] top-[277px] left-[27px]"
                    alt="Group"
                    src="/group-11.png"
                  />
                  <img
                    className="absolute w-[66px] h-[162px] top-[130px] left-[34px]"
                    alt="Vector"
                    src="/vector-35.svg"
                  />
                  <img
                    className="absolute w-[70px] h-[109px] top-[34px] left-[41px]"
                    alt="Vector"
                    src="/vector-21.svg"
                  />
                  <img
                    className="absolute w-[19px] h-[66px] top-[97px] left-[97px]"
                    alt="Vector"
                    src="/vector-27.svg"
                  />
                  <img
                    className="absolute w-11 h-[59px] top-[81px] left-0"
                    alt="Vector"
                    src="/vector-28.svg"
                  />
                  <img
                    className="absolute w-[30px] h-[84px] top-[61px] left-[86px]"
                    alt="Vector"
                    src="/vector-29.svg"
                  />
                  <img
                    className="absolute w-[65px] h-[78px] top-[47px] left-[11px]"
                    alt="Vector"
                    src="/vector-44.svg"
                  />
                  <img
                    className="absolute w-[29px] h-[29px] top-[7px] left-[58px]"
                    alt="Vector"
                    src="/vector-132.svg"
                  />
                  <img
                    className="absolute w-[35px] h-8 top-0 left-[55px]"
                    alt="Vector"
                    src="/vector-60.svg"
                  />
                </div>
              </div>
              {/* More illustration elements */}
              <img
                className="absolute w-[180px] h-[174px] top-[109px] left-[45px]"
                alt="Vector"
                src="/vector-16.svg"
              />
              <img
                className="absolute w-[3px] h-12 top-[113px] left-[253px]"
                alt="Vector"
                src="/vector-1.svg"
              />
              <img
                className="absolute w-[399px] h-[71px] top-[247px] left-0"
                alt="Group"
                src="/group-2.png"
              />
              {/* More illustration elements preserved */}
            </div>
            <img
              className="absolute w-[3px] h-3.5 top-[79px] left-4"
              alt="Vector"
              src="/vector-14.svg"
            />
            <img
              className="absolute w-[3px] h-[25px] top-[113px] left-4"
              alt="Vector"
              src="/vector-1.svg"
            />
            <img
              className="absolute w-[3px] h-[25px] top-36 left-4"
              alt="Vector"
              src="/vector-1.svg"
            />
            <img
              className="absolute w-[3px] h-[25px] top-[35px] left-[143px]"
              alt="Vector"
              src="/vector-1.svg"
            />
            <img
              className="absolute w-[77px] h-[11px] top-[81px] left-[25px]"
              alt="Group"
              src="/group-4.png"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-10 px-20">
          <div className="relative w-full h-[199px]">
            <div className="absolute w-full h-[123px] top-0 left-0 bg-[#fbfbfb]">
              <div className="flex items-center justify-center gap-16 h-full">
                {featureBenefits.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className={`w-[52px] h-[52px] rounded-[26px]`}
                      style={{ backgroundColor: feature.background }}
                    >
                      <img
                        className="w-[34px] h-[34px] m-auto mt-2"
                        alt={feature.text}
                        src={feature.icon}
                      />
                    </div>
                    <div className="w-[130px] font-normal text-[#353535] text-sm leading-4">
                      {feature.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute w-full top-[99px] left-0 text-center">
              <h2 className="font-medium text-[#0f3267] text-[28px] leading-[50px]">
                How It Works?
              </h2>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mt-10 px-20">
          <div className="flex flex-col gap-8">
            {workflowSteps.map((step, index) => (
              <Card
                key={index}
                className="relative w-full h-auto bg-transparent border-none"
              >
                <CardContent className="p-0">
                  <div
                    className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center gap-8`}
                  >
                    <div
                      className={`w-[300px] ${index % 2 === 0 ? "pl-0" : "pr-0"}`}
                    >
                      <h3 className="font-medium text-[#212529] text-xl leading-6 mb-4">
                        {step.title}
                      </h3>
                      <p className="font-light text-[#1c1f22] text-[13px] leading-[18px] mb-4">
                        {step.description}
                      </p>
                      <div className="w-6 h-6 bg-white rounded-xl shadow-[0px_4px_9px_#00000040] flex items-center justify-center">
                        <span
                          style={{ color: step.color }}
                          className="font-normal text-[17px] leading-6"
                        >
                          {step.id}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="h-[150px] object-contain"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Conversion Improvement Section */}
        <section className="mt-20 px-20">
          <div className="relative w-full h-[766px]">
            <div className="absolute w-full h-[766px] top-0 left-0 bg-[#fbfbfb]" />

            <div className="absolute w-[487px] top-[76px] left-[27px] font-medium text-[#00255e] text-[28px] leading-[50px]">
              How We Improve Your Conversion
            </div>

            <div className="absolute w-[469px] top-[135px] left-[27px] font-light text-[#00255e] text-base leading-[26px]">
              CausalFunnel technology actively drives your visitors along the
              conversion funnel with persona and intent prediction nudges. Our
              technology works even if the visitor comes back after their
              cookies have been wiped (Apple clears cookies in 1 to 7 days) and
              continuously boosts your conversions.
            </div>

            <Button className="absolute w-[151px] h-[46px] top-[290px] left-[27px] bg-[#e4faff] rounded-lg shadow-[0px_4px_4px_#00000040] text-[#00255e] font-medium text-[17px]">
              Start Free Trial
            </Button>

            {/* Graph visualization */}
            <div className="absolute w-[678px] h-[305px] top-[49px] left-[612px] bg-[#32c5ff] rounded-md shadow-[1px_3px_6px_#00000040]">
              <div className="absolute w-[646px] h-[291px] top-[14px] left-[7px] bg-[url(/vector-137.svg)] bg-[100%_100%]">
                <div className="relative h-[290px] top-px">
                  <img
                    className="absolute w-[646px] h-[242px] top-0 left-0"
                    alt="Vector"
                    src="/vector-141.svg"
                  />
                  <img
                    className="absolute w-[646px] h-[226px] top-0 left-0"
                    alt="Vector"
                    src="/vector-140.svg"
                  />
                  <img
                    className="absolute w-[646px] h-[290px] top-0 left-0"
                    alt="Vector"
                    src="/vector-151.svg"
                  />
                  <img
                    className="absolute w-[646px] h-[242px] top-0 left-0"
                    alt="Vector"
                    src="/vector-117.svg"
                  />
                  <img
                    className="absolute w-36 h-[46px] top-3.5 left-[483px]"
                    alt="Group"
                    src="/group-19.png"
                  />
                  <img
                    className="absolute w-[390px] h-[138px] top-[106px] left-32"
                    alt="Group"
                    src="/group-20.png"
                  />
                  <img
                    className="absolute w-[535px] h-4 top-[246px] left-14"
                    alt="Group"
                    src="/group-21.png"
                  />
                  <img
                    className="absolute w-[590px] h-2.5 top-[268px] left-[22px]"
                    alt="Group"
                    src="/group-22.png"
                  />
                </div>
              </div>
            </div>

            {/* Case studies grid */}
            <div className="absolute top-[480px] left-[150px] grid grid-cols-2 gap-6">
              {caseStudies.map((study, index) => (
                <Card
                  key={index}
                  className="w-[394px] h-[90px] bg-white shadow-sm border-none"
                >
                  <CardContent className="p-0 flex items-center">
                    <div className="w-[90px] h-20 bg-white rounded-[15px] flex items-center justify-center">
                      <img
                        src={study.logo}
                        alt="Company logo"
                        className="max-w-[80px] max-h-[40px] object-contain"
                      />
                    </div>
                    <div className="ml-8">
                      <div className="font-medium text-[#212529] text-xl tracking-[-0.60px]">
                        {study.metric}
                      </div>
                      <div className="font-light text-[#212529] text-base tracking-[-0.48px]">
                        {study.description}
                      </div>
                    </div>
                    <img
                      className="ml-auto mr-4"
                      alt="Growth indicator"
                      src="/group-5.png"
                      width="18"
                      height="18"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>

            <img
              className="absolute w-[85px] h-[84px] top-[483px] left-[162px]"
              alt="Decorative dots"
              src="/titik-titik.png"
            />
            <img
              className="absolute w-[85px] h-[84px] top-[637px] left-[922px]"
              alt="Decorative dots"
              src="/titik-titik-1.png"
            />
          </div>
        </section>

        {/* Customer Stories Section */}
        <section className="mt-20 px-20">
          <div className="relative w-full">
            <h2 className="text-[28px] font-medium text-[#00255e] leading-8 mb-10 ml-[104px]">
              Customer Stories
            </h2>

            <div className="grid grid-cols-2 gap-6">
              {customerStories.map((story, index) => (
                <Card
                  key={index}
                  className={`bg-white rounded-[20px] shadow-[0px_4px_9px_#00000040] ${
                    index === 0
                      ? "col-start-2 row-start-1"
                      : index === 1
                        ? "col-start-1 row-start-2"
                        : "col-start-2 row-start-2"
                  }`}
                >
                  <CardContent className="p-5">
                    <h3 className="font-medium text-[#212529] text-[17px] tracking-[-0.51px] mb-4">
                      {story.title}
                    </h3>
                    <p className="font-light text-[#00255e] text-[13px] leading-5 mb-6">
                      {story.content}
                    </p>
                    <div className="flex items-center mt-4">
                      <img
                        src={story.logo}
                        alt="Company logo"
                        className="w-[54px] h-14 object-cover mr-4"
                      />
                      <div>
                        <div className="font-medium text-[#212529] text-[17px]">
                          {story.author}
                        </div>
                        <div className="font-light text-[#00255e] text-sm leading-[22px]">
                          {story.position}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos Section */}
        <section className="mt-20 px-20">
          <div className="w-full h-[181px] bg-[#fbfbfb] flex items-center justify-between px-10">
            <img className="w-[30px] h-[30px]" alt="Previous" src="/down.svg" />

            <div className="flex items-center justify-between flex-1 px-10">
              {clientLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="h-[60px] object-contain"
                />
              ))}
            </div>

            <img className="w-[30px] h-[30px]" alt="Next" src="/down-1.svg" />
          </div>
        </section>

        {/* News Updates Section */}
        <section className="mt-20 px-20">
          <h2 className="text-[28px] font-medium text-[#00255e] leading-8 text-center mb-10">
            News Latest Updates
          </h2>

          <div className="flex justify-center gap-6">
            {newsUpdates.map((news, index) => (
              <Card
                key={index}
                className="w-[308px] h-[179px] border-none"
                style={{ backgroundImage: `url(${news.background})` }}
              >
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div className="font-light text-[#212529] text-base tracking-[-0.48px]">
                    {news.title}
                  </div>
                  <div className="flex justify-center">
                    <img
                      src={news.logo}
                      alt="News logo"
                      className="h-[46px] object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button className="w-[151px] h-[46px] bg-[#00255e] rounded-lg shadow-[0px_4px_4px_#00000040] text-white font-medium text-[17px]">
              Start Free Trial
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 w-full">
          <div className="relative w-full h-[291px]">
            <div className="absolute w-full h-[244px] top-[47px] left-0 bg-[#e4faff]" />

            {/* Newsletter Subscription */}
            <div className="absolute w-[992px] h-[83px] top-0 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-[0px_4px_10px_#00000040] flex items-center px-8">
              <div className="font-medium text-[#00255e] text-[15px] leading-5 mr-8">
                Get Funnel Optimization Insights Delivered To Your Inbox!
              </div>
              <div className="flex-1 flex">
                <Input
                  className="h-[46px] border-black rounded-lg shadow-[0px_4px_4px_#00000040] rounded-r-none"
                  placeholder="Enter email..."
                />
                <Button className="h-[46px] bg-[#e4faff] text-[#00255e] rounded-l-none rounded-r-lg">
                  SUBSCRIBE
                </Button>
              </div>
            </div>

            {/* Logo */}
            <div className="absolute w-48 h-[30px] top-[135px] left-[152px]">
              <div className="relative w-[183px] h-7">
                <img
                  className="absolute w-[29px] h-7 top-0 left-0"
                  alt="Logo"
                  src="/group-24.png"
                />
                <img
                  className="absolute w-[148px] h-[17px] top-[5px] left-9"
                  alt="Causal funnel"
                  src="/causalfunnel-1.svg"
                />
              </div>
            </div>

            {/* Footer Navigation */}
            <div className="absolute top-[146px] left-1/2 transform -translate-x-1/2 flex gap-8">
              <div className="text-[#00255e] text-sm">Platform</div>
              <div className="text-[#00255e] text-sm">Company</div>
              <div className="text-[#00255e] text-sm">Blog</div>
            </div>

            {/* Social Media Icons */}
            <div className="absolute top-[186px] left-1/2 transform -translate-x-1/2 flex gap-4">
              {socialIcons.map((social, index) => (
                <div
                  key={index}
                  className="w-7 h-7 bg-white rounded shadow-[0px_4px_4px_#00000040] flex items-center justify-center"
                >
                  <img src={social.icon} alt={social.alt} className="w-4 h-4" />
                </div>
              ))}
            </div>

            <Separator className="absolute w-full top-[255px] left-0" />

            <div className="absolute top-[262px] left-1/2 transform -translate-x-1/2 font-normal text-[#00255e] text-xs text-center">
              2022 copyrights.All Rights Reserved
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
