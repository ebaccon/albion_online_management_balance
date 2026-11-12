<script setup lang="ts">
import { handle } from '@primeuix/themes/aura/imagecompare'
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Label from 'primevue/label'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

//region FORM
const { values } = useForm()
//endregion FORM

//region DECLARATION FIELDS
const { value: name } = useField<string>('name', yup.string().required('Required'), {
  initialValue: '',
})
const { value: countPlayer } = useField<number>('countPlayer', yup.number().required('Required').typeError('Give a valid Number'), {
  initialValue: 5,
})
const { value: amountSilver } = useField<number>('amountSilver', yup.number().required('Required').typeError('Give a valid Number'), {
  initialValue: 500000,
})
const { value: amountEquipment } = useField<number>('amountEquipment', yup.number().required('Required').typeError('Give a valid Number'), {
  initialValue: 1000000,
})
const { value: amountRepair } = useField<number>('amountRepair', yup.number().required('Required').typeError('Give a valid Number'), {
  initialValue: 100000,
})
const { value: amountMap } = useField<number>('amountMap', yup.number().required('Required').typeError('Give a valid Number'), {
  initialValue: 0,
})
const { value: percentTaxes } = useField<number>('percentTaxes', yup.number().required('Required').typeError('Give a valid Number'), {
  initialValue: 15,
})
//endregion DECLARATION FIELDS

//region DISPLAY AMOUNT
const handleDisplayTotalAmount = () => {
  return amountEquipment.value + amountSilver.value - amountRepair.value - amountMap.value
}

const handleDisplayTotalAmountMinusTaxes = () => {
  return (amountEquipment.value + amountSilver.value - amountRepair.value - amountMap.value) * (1 - percentTaxes.value / 100)
}

const handleDisplayTotalAmountMinusTaxesPerPlayer = () => {
  return (amountEquipment.value + amountSilver.value - amountRepair.value - amountMap.value) * (1 - percentTaxes.value / 100) / countPlayer.value
}
//endregion DISPLAY AMOUNT
//endregion COPY TO DISCORD

//region COPY TO DISCORD
const handleCopyToDiscord = () => {
  const textToCopy = `**${name.value}**
Total amount: ${handleDisplayTotalAmount().toLocaleString()}
Total amount minus taxes: ${handleDisplayTotalAmountMinusTaxes().toLocaleString()}
Total amount minus taxes per player: ${handleDisplayTotalAmountMinusTaxesPerPlayer().toLocaleString()}`

  navigator.clipboard.writeText(textToCopy)
}
//endregion COPY TO DISCORD

</script>

<template>
  <main>
    <div class="flex justify-center">
      <Card class="max-w-sm w-full bg-blue-500">
        <template #content>
          <div class="flex flex-col gap-1.5 mx-auto w-full max-w-3xs">
            <!-- name -->
            <div>
              <Label for="basic-inputnumber">Name</Label>
              <InputText v-model="name" inputId="name" mode="text" />
            </div>
            <!-- amountEquipment -->
            <div>
              <Label for="basic-inputnumber">Amount Equipment</Label>
              <InputNumber v-model="amountEquipment" inputId="amount-equipment" mode="decimal" :min="0" showButtons/>
            </div>
            <!-- amountSilver -->
            <div>
              <Label for="basic-inputnumber">Amount Silver</Label>
              <InputNumber v-model="amountSilver" inputId="amount-silver" mode="decimal" :min="0" showButtons/>
            </div>
            <!-- amountRepair -->
            <div>
              <Label for="basic-inputnumber">Amount Repair</Label>
              <InputNumber v-model="amountRepair" inputId="amount-repair" mode="decimal" :min="0" showButtons/>
            </div>
            <!-- amountMap -->
            <div>
              <Label for="basic-inputnumber">Amount Map</Label>
              <InputNumber v-model="amountMap" inputId="amount-map" mode="decimal" :min="0" showButtons/>
            </div>
            <!-- percentTaxes -->
            <div>
              <Label for="basic-inputnumber">Percent Taxes</Label>
              <InputNumber v-model="percentTaxes" inputId="percent-taxes" mode="decimal" :min="0" :max="100" showButtons/>
            </div>
            <!-- countPlayer -->
            <div>
              <Label for="basic-inputnumber">Number players</Label>
              <InputNumber v-model="countPlayer" inputId="number-players" mode="decimal" :min="1" :max="250" showButtons/>
            </div>
          </div>
          <div class="pt-8" >
            <div>
              Total amount: {{ handleDisplayTotalAmount() }}
            </div>
            <div>
              Total amount minus taxes : {{ handleDisplayTotalAmountMinusTaxes()}}
            </div>
            <div>
              Total amount minus taxes per player : {{ handleDisplayTotalAmountMinusTaxesPerPlayer()}}
            </div>
          </div>
          <div class="pt-8" >
            <Button label="Copy to Discord" @click="handleCopyToDiscord()" />
          </div>
        </template>
      </Card>
    </div>
  </main>
</template>
