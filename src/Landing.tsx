import { QuestionCircleOutlined } from "@ant-design/icons";
import { Divider, Radio, Select, Table, Tooltip } from "antd";
import { ReactNode, useRef, useState } from "react";
import { EnvironmentalScore } from "./EnvironmentalScore";
import { Introduction } from "./Introduction";
import { SampleCar, SampleCarCard } from "./SampleCarCard";
import { TotalFootprint } from "./TotalFootprint";
import { FootprintBreakdown } from "./charts/FootprintBreakdown";
import { allEnvironmentalScoreCountries } from "./methodology/environmentalScoreCountry";
import { FootprintEstimator } from "./methodology/footprintEstimator";
import { AluminiumRegion } from "./methodology/footprintItems/aluminiumFootprint";
import { BatteryChemistry, BatteryRegion, batteryChemistryName } from "./methodology/footprintItems/batteryFootprint";
import { OtherMetalsRegion } from "./methodology/footprintItems/otherMetalsFootprint";
import { ProductionCountry } from "./methodology/footprintItems/productionFootprint";
import { SteelCountry } from "./methodology/footprintItems/steelFootprint";
import { TransportationMode, TransportationRegion } from "./methodology/footprintItems/transportationFootprint";
import { Settings } from "./settings/Settings";
import { SettingsSlider } from "./settings/SettingsSlider";
import useIsMobile from "./utils/useIsMobile";

function Section(props: { title: string, children: ReactNode }) {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium mb-4">
                {props.title}
            </h3>
            {props.children}
        </div>
    )
}

function ScoringSummaryItem(props: { title: string, children: ReactNode }) {
    return (
        <div className="flex flex-row items-center gap-2">
            <div className="flex-grow">
                {props.title}
            </div>
            {props.children}
        </div>
    )
}

interface CarProperties {
    totalMassAluminiumKg: number
    totalMassSteelKg: number
    totalMassWithoutBatteryKg: number
    totalMassOtherThanSteelOrAluminiumKg: number
    massWithoutDriverKg: number
    batteryCapacityKWh: number
    chemistry: BatteryChemistry
    isLargeCar: boolean
}

export function Landing() {
    const simulatorRef = useRef<HTMLDivElement>(null)

    const isMobile = useIsMobile()

    const transportationFromChinaToFrance = [
        {
            mode: TransportationMode.Sea,
            distanceKm: 20000,
            region: TransportationRegion.Asia
        },
        {
            mode: TransportationMode.Road,
            distanceKm: 500,
            region: TransportationRegion.Asia
        },
        {
            mode: TransportationMode.Road,
            distanceKm: 500,
            region: TransportationRegion.France
        }
    ]

    const transportationFromSouthKoreaToFrance = [
        {
            mode: TransportationMode.Sea,
            distanceKm: 23000,
            region: TransportationRegion.Asia
        },
        {
            mode: TransportationMode.Road,
            distanceKm: 500,
            region: TransportationRegion.Asia
        },
        {
            mode: TransportationMode.Road,
            distanceKm: 500,
            region: TransportationRegion.France
        }
    ]

    const transportationFromGermanyToFrance = [
        {
            mode: TransportationMode.Train,
            distanceKm: 1500,
            region: TransportationRegion.Europe_Without_France
        },
        {
            mode: TransportationMode.Road,
            distanceKm: 500,
            region: TransportationRegion.Europe_Without_France
        },
        {
            mode: TransportationMode.Road,
            distanceKm: 500,
            region: TransportationRegion.France
        }
    ]

    const transportationFromFranceToFrance = [
        {
            mode: TransportationMode.Train,
            distanceKm: 500,
            region: TransportationRegion.France
        },
        {
            mode: TransportationMode.Road,
            distanceKm: 200,
            region: TransportationRegion.France
        }
    ]

    const [selectedCarName, setSelectedCarName] = useState<string | undefined>(undefined)
    const [totalMassAluminiumKg, setTotalMassAluminiumKg] = useState(300)
    const [aluminiumRegion, setAluminiumRegion] = useState(AluminiumRegion.China)
    const [totalMassSteelKg, setTotalMassSteelKg] = useState(800)
    const [steelCountry, setSteelCountry] = useState(SteelCountry.Chine)
    const [totalMassWithoutBatteryKg, setTotalMassWithoutBatteryKg] = useState(1500)
    const [totalMassOtherThanSteelOrAluminiumKg, setTotalMassOtherThanSteelOrAluminiumKg] = useState(100)
    const [otherMetalsRegion, setOtherMetalsRegion] = useState(OtherMetalsRegion.Others)
    const [massWithoutDriverKg, setMassWithoutDriverKg] = useState(1800)
    const [productionCountry, setProductionCountry] = useState(ProductionCountry.Chine)
    const [batteryCapacityKWh, setBatteryCapacityKWh] = useState(50)
    const [batteryRegion, setBatteryRegion] = useState(BatteryRegion.China)
    const [chemistry, setChemistry] = useState(BatteryChemistry.LFP_Graphite)
    const [isLargeCar, setIsLargeCar] = useState(true)
    const [transportationSettings, setTransportationSettings] = useState(transportationFromChinaToFrance)

    const footprintEstimator = new FootprintEstimator({
        totalMassAluminiumKg,
        aluminiumRegion,
        totalMassSteelKg,
        steelCountry,
        totalMassWithoutBatteryKg,
        totalMassOtherThanSteelOrAluminiumKg,
        massWithoutDriverKg,
        productionCountry,
        batteryCapacityKWh,
        batteryRegion,
        chemistry,
        otherMetalsRegion,
        transportationSettings,
        isLargeCar
    })

    const china = allEnvironmentalScoreCountries.find(country => country.id === 'cn')!
    const france = allEnvironmentalScoreCountries.find(country => country.id === 'fr')!
    const germany = allEnvironmentalScoreCountries.find(country => country.id === 'de')!
    const southKorea = allEnvironmentalScoreCountries.find(country => country.id === 'kr')!

    const mediumSUV: CarProperties = {
        totalMassAluminiumKg: 150,
        totalMassSteelKg: 800,
        totalMassWithoutBatteryKg: 1500,
        totalMassOtherThanSteelOrAluminiumKg: 100,
        massWithoutDriverKg: 1800,
        batteryCapacityKWh: 70,
        chemistry: BatteryChemistry.NCA_Graphite,
        isLargeCar: true,
    }

    const smallCar: CarProperties = {
        totalMassAluminiumKg: 100,
        totalMassSteelKg: 500,
        totalMassWithoutBatteryKg: 1200,
        totalMassOtherThanSteelOrAluminiumKg: 60,
        massWithoutDriverKg: 1200,
        batteryCapacityKWh: 30,
        chemistry: BatteryChemistry.NCA_Graphite,
        isLargeCar: false,
    }


    const sampleCars: SampleCar[] = [
        {
            name: 'SUV intégralement produit en Chine',
            emoji: china.emoji,
            footprintEstimator: new FootprintEstimator({
                transportationSettings: transportationFromChinaToFrance,
                ...china,
                ...mediumSUV
            })
        },
        {
            name: 'SUV intégralement produit en Corée du Sud',
            emoji: southKorea.emoji,
            footprintEstimator: new FootprintEstimator({
                transportationSettings: transportationFromSouthKoreaToFrance,
                ...southKorea,
                ...mediumSUV
            })
        },
        {
            name: 'SUV intégralement produit en Allemagne',
            emoji: germany.emoji,
            footprintEstimator: new FootprintEstimator({
                transportationSettings: transportationFromGermanyToFrance,
                ...germany,
                ...mediumSUV
            })
        },
        {
            name: 'SUV intégralement produit en France',
            emoji: france.emoji,
            footprintEstimator: new FootprintEstimator({
                transportationSettings: transportationFromFranceToFrance,
                ...france,
                ...mediumSUV
            })
        },
        {
            name: 'Citadine intégralement produite en Chine',
            emoji: china.emoji,
            footprintEstimator: new FootprintEstimator({
                transportationSettings: transportationFromChinaToFrance,
                ...china,
                ...smallCar
            })
        },
        {
            name: 'Citadine intégralement produite en Allemagne',
            emoji: germany.emoji,
            footprintEstimator: new FootprintEstimator({
                transportationSettings: transportationFromGermanyToFrance,
                ...germany,
                ...smallCar
            })
        },
        {
            name: 'Citadine intégralement produite en France',
            emoji: france.emoji,
            footprintEstimator: new FootprintEstimator({
                transportationSettings: transportationFromFranceToFrance,
                ...france,
                ...smallCar
            })
        }
    ]

    function replaceSimulationWithSampleCar(car: SampleCar) {
        setTotalMassAluminiumKg(car.footprintEstimator.totalMassAluminiumKg)
        setAluminiumRegion(car.footprintEstimator.aluminiumRegion)
        setTotalMassSteelKg(car.footprintEstimator.totalMassSteelKg)
        setSteelCountry(car.footprintEstimator.steelCountry)
        setTotalMassWithoutBatteryKg(car.footprintEstimator.totalMassWithoutBatteryKg)
        setTotalMassOtherThanSteelOrAluminiumKg(car.footprintEstimator.totalMassOtherThanSteelOrAluminiumKg)
        setMassWithoutDriverKg(car.footprintEstimator.massWithoutDriverKg)
        setProductionCountry(car.footprintEstimator.productionCountry)
        setBatteryCapacityKWh(car.footprintEstimator.batteryCapacityKWh)
        setBatteryRegion(car.footprintEstimator.batteryRegion)
        setChemistry(car.footprintEstimator.chemistry)
        setOtherMetalsRegion(car.footprintEstimator.otherMetalsRegion)
        setIsLargeCar(car.footprintEstimator.isLargeCar)
        setSelectedCarName(car.name)
        setTransportationSettings(car.footprintEstimator.transportationSettings)

        // Scroll to simulator
        simulatorRef.current?.scrollIntoView(({ behavior: 'smooth', block: 'start' }))
    }

    return (
        <div className="flex flex-col gap-8">
            <Introduction />
            <Divider />
            <Section title="Exemples de véhicules">
                <div className="flex flex-col gap-4">
                    {sampleCars.map(sampleCar => (
                        <SampleCarCard
                            key={sampleCar.name}
                            car={sampleCar}
                            maxTotalFootprint={Math.max(...sampleCars.map(car => car.footprintEstimator.getTotalFootprint()))}
                            onCarSelected={car => replaceSimulationWithSampleCar(car)} />
                    ))
                    }
                </div>
            </Section>
            <Divider />
            <Section title={selectedCarName ? `Simulateur (${selectedCarName})` : "Simulateur"}>
                <div className="flex flex-wrap gap-16" ref={simulatorRef}>
                    <div className="flex flex-col">
                        <div>
                            <ScoringSummaryItem title="Score environnemental :" >
                                <EnvironmentalScore footprintEstimator={footprintEstimator} />
                            </ScoringSummaryItem>
                            <ScoringSummaryItem title="Empreinte carbone :" >
                                <TotalFootprint footprintEstimator={footprintEstimator} />
                            </ScoringSummaryItem>
                            <ScoringSummaryItem title="Éligibilité au bonus écologique :">
                                <div>
                                    {footprintEstimator.isEligibleForBonus()
                                        ? (
                                            <span>✅</span>
                                        )
                                        : (
                                            <span>❌</span>
                                        )}
                                </div>
                            </ScoringSummaryItem>
                        </div>
                        <div className="w-full sm:w-96">
                            <FootprintBreakdown
                                footprintEstimator={footprintEstimator}
                            />
                        </div>
                    </div>

                    <div className="flex-grow gap-2 flex flex-col">
                        <Settings label={("Type de véhicule"
                        )}>
                            <div className="flex flex-row gap-2 items-center">
                                <Radio.Group value={isLargeCar}>
                                    <Radio.Button value={false} onClick={() => setIsLargeCar(false)}>Citadine</Radio.Button>
                                    <Radio.Button value={true} onClick={() => setIsLargeCar(true)}>Véhicule multi-usages</Radio.Button>
                                </Radio.Group>
                                <Tooltip
                                    title="Définition d'un véhicule multi-usages : nombre de places assises supérieur ou égal à cinq, volume de coffre supérieur à deux cents litres et autonomie électrique supérieure ou égale à cent soixante-dix kilomètres">
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </div>
                        </Settings>
                        <Settings label="Masse totale véhicule sans chauffeur (kg)">
                            <SettingsSlider
                                min={0}
                                max={4000}
                                value={massWithoutDriverKg}
                                onChange={setMassWithoutDriverKg}
                            />
                        </Settings>
                        <Settings label="Masse totale véhicule sans batterie (kg)">
                            <SettingsSlider
                                min={0}
                                max={4000}
                                value={totalMassWithoutBatteryKg}
                                onChange={setTotalMassWithoutBatteryKg}
                                extra={<Select
                                    className="w-full"
                                    value={productionCountry}
                                    onChange={setProductionCountry}
                                    options={Object.values(ProductionCountry).map(region => (
                                        { value: region, label: region }
                                    ))} />}
                            />
                        </Settings>
                        <Settings label="Masse totale d'aluminium (kg)">
                            <SettingsSlider
                                min={0}
                                max={2000}
                                value={totalMassAluminiumKg}
                                onChange={setTotalMassAluminiumKg}
                                extra={<Select
                                    className="w-full"
                                    value={aluminiumRegion}
                                    onChange={setAluminiumRegion}
                                    options={Object.values(AluminiumRegion).map(region => (
                                        { value: region, label: region }
                                    ))} />}

                            />
                        </Settings>
                        <Settings label="Masse totale d'acier (kg)">
                            <SettingsSlider
                                min={0}
                                max={2000}
                                value={totalMassSteelKg}
                                onChange={setTotalMassSteelKg}
                                extra={<Select
                                    className="w-full"
                                    value={steelCountry}
                                    onChange={setSteelCountry}
                                    options={Object.values(SteelCountry).map(region => (
                                        { value: region, label: region }
                                    ))} />}
                            />
                        </Settings>
                        <Settings label="Masse totale d'autres métaux (kg)">
                            <SettingsSlider
                                min={0}
                                max={2000}
                                value={totalMassOtherThanSteelOrAluminiumKg}
                                onChange={setTotalMassOtherThanSteelOrAluminiumKg}
                                extra={<Select
                                    className="w-full"
                                    value={otherMetalsRegion}
                                    onChange={setOtherMetalsRegion}
                                    options={[
                                        OtherMetalsRegion.Europe,
                                        OtherMetalsRegion.Others
                                    ].map(region => (
                                        { value: region, label: region }
                                    ))} />}
                            />
                        </Settings>
                        <Settings label="Capacité de la batterie (kWh">
                            <SettingsSlider
                                className="flex-grow"
                                min={0}
                                max={120}
                                value={batteryCapacityKWh}
                                onChange={setBatteryCapacityKWh}
                                extra={<Select
                                    className="w-full"
                                    value={batteryRegion}
                                    onChange={setBatteryRegion}
                                    options={[
                                        BatteryRegion.China,
                                        BatteryRegion.Europe,
                                        BatteryRegion.Japan,
                                        BatteryRegion.SouthKorea,
                                        BatteryRegion.USA,
                                        BatteryRegion.Other
                                    ].map(region => (
                                        { value: region, label: region }
                                    ))} />}
                            />
                        </Settings>
                        <Settings label="Chimie de la batterie">
                            <Select
                                className="w-full"
                                value={chemistry}
                                options={[
                                    BatteryChemistry.LFP_Graphite,
                                    BatteryChemistry.NCA_Graphite,
                                    BatteryChemistry.NMC111_Graphite,
                                    BatteryChemistry.NMC532_Graphite,
                                    BatteryChemistry.NMC622_Graphite,
                                    BatteryChemistry.NMC811_Graphite,
                                    BatteryChemistry.Other_Chemistry
                                ].map(chemistry => (
                                    { value: chemistry, label: batteryChemistryName(chemistry) }
                                ))}
                                onChange={setChemistry} />
                        </Settings>
                        <Settings label="Modes de transport (non éditable)">
                            <div className="flex flex-col w-full">
                                <Table
                                    showHeader={!isMobile}
                                    pagination={false}
                                    dataSource={transportationSettings.map((transportation, index) => (
                                        {
                                            key: index,
                                            mode: transportation.mode,
                                            region: transportation.region,
                                            distanceKm: `${transportation.distanceKm.toLocaleString()} km`
                                        }))
                                    }
                                    columns={[
                                        {
                                            title: 'Mode de transport',
                                            dataIndex: 'mode',
                                            key: 'mode',
                                        },
                                        {
                                            title: 'Region',
                                            dataIndex: 'region',
                                            key: 'region',
                                        },
                                        {
                                            title: 'Distance',
                                            dataIndex: 'distanceKm',
                                            key: 'distanceKm',
                                        },
                                    ]}
                                />
                            </div>
                        </Settings>
                    </div>
                </div >
            </Section >
        </div >
    )
}