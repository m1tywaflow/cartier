"use client";

import dynamic from "next/dynamic";

const Map = dynamic(
  () => import("@/components/atoms/MapAtoms/map").then((m) => m.Map),
  { ssr: false }
);
const MapControls = dynamic(
  () => import("@/components/atoms/MapAtoms/map").then((m) => m.MapControls),
  { ssr: false }
);
const MapMarker = dynamic(
  () => import("@/components/atoms/MapAtoms/map").then((m) => m.MapMarker),
  { ssr: false }
);
const MarkerContent = dynamic(
  () => import("@/components/atoms/MapAtoms/map").then((m) => m.MarkerContent),
  { ssr: false }
);
const MarkerPopup = dynamic(
  () => import("@/components/atoms/MapAtoms/map").then((m) => m.MarkerPopup),
  { ssr: false }
);
const MarkerTooltip = dynamic(
  () => import("@/components/atoms/MapAtoms/map").then((m) => m.MarkerTooltip),
  { ssr: false }
);

const MapCn = () => {
  return (
    <section className="relative py-20 bg-white">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]  rounded-full" />
      <div
        className="relative max-w-7xl mx-auto h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#0B0B0B]"
        data-lenis-prevent
      >
        <Map center={[21.0122, 52.2297]} zoom={12}>
          <MapControls
            position="bottom-right"
            showZoom
            showCompass
            showLocate
            showFullscreen
          />
          <MapMarker longitude={21.0122} latitude={52.2297}>
            <MarkerContent>
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
                <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white shadow-lg" />
                </div>
              </div>
            </MarkerContent>
            <MarkerTooltip>Warsaw</MarkerTooltip>
            <MarkerPopup>
              <div className="min-w-[160px] rounded-lg bg-[#0F0F0F] p-3 shadow-xl border border-[#1F1F1F]">
                <p className="font-semibold text-sm text-white">
                  Warsaw FutureTech
                </p>
                <p className="text-xs text-gray-400 mt-1">Poland</p>
                <p className="text-xs text-gray-500 mt-2">52.2297, 21.0122</p>
              </div>
            </MarkerPopup>
          </MapMarker>
        </Map>
      </div>
    </section>
  );
};

export default MapCn;
