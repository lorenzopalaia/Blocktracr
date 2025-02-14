import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
} from "lucide-react";
import {
  Item,
  ItemIcon,
  ItemTitle,
  ItemDescription,
} from "@/components/ui/item";
import { Section } from "@/components/ui/section";

export default function Items() {
  return (
    <Section>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          Empower Your Crypto Journey with Live, Actionable Insights
        </h2>
        <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <ScanFaceIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Real-Time Market Insights
            </ItemTitle>
            <ItemDescription>
              Get up-to-the-second data with live graphs and instant updates.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <MonitorSmartphoneIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Responsive Dashboard
            </ItemTitle>
            <ItemDescription>
              Monitor your portfolio seamlessly on any device, anywhere.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <EclipseIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Day &amp; Night Modes
            </ItemTitle>
            <ItemDescription>
              Switch effortlessly between themes for optimal viewing, anytime.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <BlocksIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Customizable Analytics
            </ItemTitle>
            <ItemDescription>
              Tailor your charts and widgets to focus on what matters most.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <FastForwardIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Lightning-Fast Performance
            </ItemTitle>
            <ItemDescription>
              Experience ultra-responsive updates and smooth interactions.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <RocketIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Market-Ready Platform
            </ItemTitle>
            <ItemDescription>
              Launch your crypto journey with tools built for success.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <LanguagesIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Global Connectivity
            </ItemTitle>
            <ItemDescription>
              Access international markets with real-time currency updates.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <SquarePenIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Seamless Integration
            </ItemTitle>
            <ItemDescription>
              Connect effortlessly to exchanges and manage your assets in one
              place.
            </ItemDescription>
          </Item>
        </div>
      </div>
    </Section>
  );
}
