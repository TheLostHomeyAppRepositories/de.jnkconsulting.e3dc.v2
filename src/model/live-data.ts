import {ChargingConfiguration, EmergencyPowerState, ManualChargeState, WallboxPowerState} from 'easy-rscp';

export interface LiveData {
    pvDelivery: number
    gridDelivery: number
    batteryDelivery: number
    houseConsumption: number
    batteryChargingLevel: number
    firmwareVersion: string
    chargingConfig: ChargingConfiguration
    manualChargeState: ManualChargeState,
    emergencyPowerState: EmergencyPowerState,
    wallboxPowerState: WallboxPowerState[],
    wallboxCompleteConsumption: number,
    wallboxCompleteConsumptionSolarShare: number,
    externalPowerConnected: boolean,
    externalPowerDelivery: number,
}
