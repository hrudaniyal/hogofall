"use client";

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import ScrollAnimation from "./ScrollAnimation";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "0.75rem",
};

const center = {
  lat: 12.1157157,
  lng: 77.7797836,
};

const mapOptions = {
  styles: [
    {
      featureType: "all",
      elementType: "all",
      stylers: [
        { invert_lightness: true },
        { saturation: 10 },
        { lightness: 30 },
        { gamma: 0.5 },
        { hue: "#00ffee" },
      ],
    },
  ],
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: true,
  mapTypeControl: true,
  fullscreenControl: true,
};

const PlanYourVisit = () => {
  const mapRef = React.useRef<google.maps.Map | null>(null);
  const [mapError, setMapError] = React.useState<string | null>(null);

  const onLoad = React.useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(() => {
    mapRef.current = null;
  }, []);

  const onError = React.useCallback(() => {
    setMapError(
      "Failed to load Google Maps. Please check your API key configuration."
    );
  }, []);

  return (
    <section className="py-32 bg-[var(--color-night)]">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-5xl font-bold text-center text-white mb-16">
            Plan Your Visit
          </h2>
        </ScrollAnimation>

        <div id="planvisit" className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollAnimation>
            <div className="space-y-8">
              <div className="bg-[var(--color-rich-black)] rounded-xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Location & Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <svg
                      className="w-6 h-6 text-[var(--color-cinereous)] mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <h4 className="text-white font-semibold">
                        Opening Hours
                      </h4>
                      <p className="text-[var(--color-eerie-black)]">
                        Daily: 6:00 AM - 6:00 PM
                        <br />
                        Best time to visit: Early morning or late afternoon
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <svg
                      className="w-6 h-6 text-[var(--color-cinereous)] mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                      />
                    </svg>
                    <div>
                      <h4 className="text-white font-semibold">
                        Entry Tickets
                      </h4>
                      <p className="text-[var(--color-eerie-black)]">
                        Adults: ₹50
                        <br />
                        Children (5-12): ₹25
                        <br />
                        Children under 5: Free
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--color-rich-black)] rounded-xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Getting Here
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <svg
                      className="w-6 h-6 text-[var(--color-cinereous)] mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <h4 className="text-white font-semibold">
                        Nearest Transportation
                      </h4>
                      <p className="text-[var(--color-eerie-black)]">
                        Bus Stand: 2 km
                        <br />
                        Railway Station: 15 km
                        <br />
                        Airport: 120 km
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--color-rich-black)] rounded-xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Do&apos;s and Don&apos;ts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Do&apos;s</h4>
                    <ul className="list-disc list-inside text-[var(--color-eerie-black)] space-y-2">
                      <li>Carry water and snacks</li>
                      <li>Wear comfortable shoes</li>
                      <li>Follow guide instructions</li>
                      <li>Keep valuables safe</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">
                      Don&apos;ts
                    </h4>
                    <ul className="list-disc list-inside text-[var(--color-eerie-black)] space-y-2">
                      <li>Don&apos;t litter</li>
                      <li>Don&apos;t swim in restricted areas</li>
                      <li>Don&apos;t feed wildlife</li>
                      <li>Don&apos;t leave valuables unattended</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="space-y-8">
              <div className="bg-[var(--color-rich-black)] rounded-xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Location Map
                </h3>
                <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
                  {!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? (
                    <div className="w-full h-full flex items-center justify-center bg-[var(--color-rich-black)] text-white">
                      <p>
                        Google Maps API key is not configured. Please add your
                        API key to .env.local file.
                      </p>
                    </div>
                  ) : (
                    <LoadScript
                      googleMapsApiKey={
                        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
                      }
                      onError={onError}
                    >
                      {mapError ? (
                        <div className="w-full h-full flex items-center justify-center bg-[var(--color-rich-black)] text-white">
                          <p>{mapError}</p>
                        </div>
                      ) : (
                        <GoogleMap
                          mapContainerStyle={containerStyle}
                          center={center}
                          zoom={15}
                          options={mapOptions}
                          onLoad={onLoad}
                          onUnmount={onUnmount}
                        >
                          <Marker
                            position={center}
                            title="Hogenakkal Boating"
                          />
                        </GoogleMap>
                      )}
                    </LoadScript>
                  )}
                </div>
                <div className="mt-4 text-center">
                  <a
                    href="https://www.google.com/maps/place/Hogenakkal+Boating/@12.1157157,77.7797836,15z/data=!4m6!3m5!1s0x3baea31ded61bdab:0xaafba93737add62d!8m2!3d12.1157157!4d77.7797836!16s%2Fg%2F11p17gm3ys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-cinereous)] hover:text-white transition-colors duration-300"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="bg-[var(--color-rich-black)] rounded-xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Weather Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Best Time to Visit</span>
                    <span className="text-[var(--color-eerie-black)]">
                      October to February
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Temperature</span>
                    <span className="text-[var(--color-eerie-black)]">
                      20°C - 35°C
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Rainfall</span>
                    <span className="text-[var(--color-eerie-black)]">
                      Moderate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default PlanYourVisit;
