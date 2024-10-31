"use client";
import React, { useEffect, useState } from "react";
import { YMaps, Map, Clusterer, Placemark } from "@pbe/react-yandex-maps";

const YMapsWrapper = ({ count, points }) => {
  const [ymapsLoaded, setYmapsLoaded] = useState(false);
  const [clusterIconContentLayout, setClusterIconContentLayout] =
    useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setYmapsLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Ограничиваем количество точек до 500
  const limitedPoints = points.slice(0, count == "low" ? 250 : count == "medium" ? 1000 : 5000);

  return (
    <YMaps
      onLoad={(ymaps) => {
        const customClusterIconContentLayout =
          ymaps.templateLayoutFactory.createClass("vdf");
        setClusterIconContentLayout(customClusterIconContentLayout);
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        {!ymapsLoaded && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ffffff",
              backgroundImage: `
      linear-gradient(0deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
    `,
              backgroundSize: "20px 20px",
              zIndex: 1,
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                border: "5px solid #ccc",
                borderRadius: "50%",
                borderTopColor: "#3a86ff",
                animation: "spin 1s linear infinite",
                backgroundColor: "white",
              }}
            />
            <style>{`
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `}</style>
          </div>
        )}
        {ymapsLoaded && (
          <YMaps>
            <Map
              defaultState={{
                center: [
                  limitedPoints[0]?.longitude || 37.573856,
                  limitedPoints[0]?.latitude || 55.751574,
                ],
                zoom: 12,
              }}
              width="100%"
              height="100%"
            >
              <Clusterer
                options={{
                  clusterIcons: [
                    {
                      href: "/custom-cluster-icon.svg",
                      size: [40, 40],
                      offset: [-20, -20],
                    },
                  ],
                  // clusterIconContentLayout: clusterIconContentLayout,
                  // clusterIconContentLayout: 'default#text',
                  groupByCoordinates: false,
                }}
              >
                {limitedPoints.map((point) => (
                  <Placemark
                    key={point.id}
                    geometry={[point.longitude, point.latitude]}
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: "/custom-icon.svg",
                      iconImageSize: [30, 30],
                      iconImageOffset: [-15, -15],
                    }}
                    properties={{
                      balloonContent: `<strong>${point.title}</strong><br/>${point.address}`,
                    }}
                  />
                ))}
              </Clusterer>
            </Map>
          </YMaps>
        )}
      </div>
    </YMaps>
  );
};

export default YMapsWrapper;
