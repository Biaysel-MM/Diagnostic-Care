import { diseases } from '../data/diseases'

export function basicDiagnosis(selectedSymptoms) {
  if (!selectedSymptoms.length) return []

  const results = diseases.map(disease => {
    const matchCount = disease.symptoms.filter(s => selectedSymptoms.includes(s)).length
    const totalSymptoms = disease.symptoms.length
    const score = totalSymptoms > 0 ? matchCount / totalSymptoms : 0
    const matchPercentage = Math.round(score * 100)

    return {
      ...disease,
      matchCount,
      totalSymptoms,
      matchPercentage,
    }
  })

  return results
    .filter(r => r.matchCount > 0)
    .sort((a, b) => b.matchPercentage - a.matchPercentage)
}

export function profundoDiagnosis(formData) {
  const { edad, sintomas } = formData
  const age = parseInt(edad) || 0

  if (!sintomas.length) return []

  const results = diseases.map(disease => {
    const matchCount = disease.symptoms.filter(s => sintomas.includes(s)).length
    const totalSymptoms = disease.symptoms.length
    const baseScore = totalSymptoms > 0 ? matchCount / totalSymptoms : 0

    let ageFactor = 1
    if (age < 12) {
      if (['asma', 'resfriado', 'gastroenteritis'].includes(disease.id)) ageFactor = 1.15
    } else if (age > 60) {
      if (['neumonia', 'gripe', 'covid', 'bronquitis'].includes(disease.id)) ageFactor = 1.2
      if (['diabetes'].includes(disease.id)) ageFactor = 1.1
    }

    const finalScore = Math.min(baseScore * ageFactor, 1)
    const matchPercentage = Math.round(finalScore * 100)

    return {
      ...disease,
      matchCount,
      totalSymptoms,
      matchPercentage,
      ageFactor,
    }
  })

  return results
    .filter(r => r.matchCount > 0)
    .sort((a, b) => b.matchPercentage - a.matchPercentage)
}
