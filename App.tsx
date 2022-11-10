import * as React from 'react'
import { useState, useRef } from 'react'
import './style.css'
import DatePick, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ko } from 'date-fns/esm/locale'
import getYear from 'date-fns/getYear'
import getMonth from 'date-fns/getMonth'

registerLocale('ko', ko)
const DatePicker = () => {
  const [currentDate, setCurrentDate] = useState()
  const [startDate, setStartDate] = useState()
  const calendar = useRef(null)

  const cancelDatePicker = () => {
    setStartDate(currentDate)
    calendar.current.setOpen(false)
  }

  const openDatePicker = () => {
    calendar.current.setOpen(true)
  }

  const closeDatePicker = () => {
    setCurrentDate(startDate)
    calendar.current.setOpen(false)
  }

  return (
    <DatePick
      withPortal
      className="date date-record"
      locale="ko"
      dateFormat="yyyy.MM.dd"
      selected={startDate}
      // minDate={minDate}
      // maxDate={maxDate}
      useWeekdaysShort={true}
      shouldCloseOnSelect={false}
      // excludeDates={excludeDates}
      ref={calendar}
      onInputClick={() => openDatePicker()}
      onChange={(date, event) => datePickHandler(date, event)}
      renderCustomHeader={({
        date,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
        decreaseMonth,
        increaseMonth
      }) => (
        <div
          style={{
            margin: 10,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div
            className="btn_month btn_month-prev"
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
          >
            <img src="/static/images/arrow-black-left.png" />
          </div>
          <div className="month-day">
            {/* {getYear(date)}.{month[getMonth(date)]}/ */}
          </div>

          <div
            className="btn_month btn_month-next"
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          >
            <img src="/static/images/arrow-black-right.png" />
          </div>
        </div>
      )}
    >
      <div className="button-container">
        <div className="btn_ctrl btn_ctrl-cancel" onClick={cancelDatePicker}>
          {' '}
          취소
        </div>
        <div className="btn_ctrl btn_ctrl-confirm" onClick={closeDatePicker}>
          선택
        </div>
      </div>
    </DatePick>
  )
}
export default DatePicker
