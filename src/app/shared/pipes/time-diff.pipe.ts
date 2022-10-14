import { Pipe, PipeTransform } from '@angular/core'
import { DateTime } from 'luxon'

@Pipe({
  name: 'timeDiff'
})
export class TimeDiffPipe implements PipeTransform {
  transform(startDateStr: string, endDateStr: string | undefined): string {
    const startDate = DateTime.fromISO(startDateStr)
    const endDate = endDateStr ? DateTime.fromISO(endDateStr) : DateTime.now()
    const diff = endDate.diff(startDate, ['years', 'months'], {
      conversionAccuracy: 'casual'
    })

    return diff.toHuman({
      unitDisplay: 'long',
      notation: 'compact',
      signDisplay: 'never',
      maximumFractionDigits: 0
    })
  }
}
