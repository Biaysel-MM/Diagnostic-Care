import { ref, computed } from 'vue'

export function useDiagnosis() {
  const selectedSymptoms = ref([])
  const diagnosisResults = ref([])
  const hasDiagnosed = ref(false)

  const addSymptom = (symptomId) => {
    if (!selectedSymptoms.value.includes(symptomId)) {
      selectedSymptoms.value.push(symptomId)
    }
  }

  const removeSymptom = (symptomId) => {
    selectedSymptoms.value = selectedSymptoms.value.filter(s => s !== symptomId)
  }

  const clearSymptoms = () => {
    selectedSymptoms.value = []
    diagnosisResults.value = []
    hasDiagnosed.value = false
  }

  return {
    selectedSymptoms,
    diagnosisResults,
    hasDiagnosed,
    addSymptom,
    removeSymptom,
    clearSymptoms,
  }
}
