import React from 'react'
import { ResponsiveCalendar } from 'nivo'

const data = [
    {
      "day": "2017-11-27",
      "value": 209
    },
    {
      "day": "2015-08-26",
      "value": 305
    },
    {
      "day": "2016-12-22",
      "value": 55
    },
    {
      "day": "2015-10-01",
      "value": 373
    },
    {
      "day": "2017-11-04",
      "value": 251
    },
    {
      "day": "2017-04-25",
      "value": 322
    },
    {
      "day": "2017-11-14",
      "value": 15
    },
    {
      "day": "2017-10-25",
      "value": 48
    },
    {
      "day": "2016-12-13",
      "value": 219
    },
    {
      "day": "2018-02-07",
      "value": 116
    },
    {
      "day": "2017-12-05",
      "value": 259
    },
    {
      "day": "2016-10-10",
      "value": 76
    },
    {
      "day": "2017-11-17",
      "value": 371
    },
    {
      "day": "2015-11-21",
      "value": 125
    },
    {
      "day": "2018-03-18",
      "value": 374
    },
    {
      "day": "2015-12-14",
      "value": 198
    },
    {
      "day": "2016-12-26",
      "value": 33
    },
    {
      "day": "2016-11-28",
      "value": 301
    },
    {
      "day": "2017-05-08",
      "value": 60
    },
    {
      "day": "2017-09-25",
      "value": 224
    },
    {
      "day": "2016-11-18",
      "value": 173
    },
    {
      "day": "2016-09-03",
      "value": 79
    },
    {
      "day": "2016-04-11",
      "value": 11
    },
    {
      "day": "2017-11-25",
      "value": 392
    },
    {
      "day": "2016-12-16",
      "value": 61
    },
    {
      "day": "2018-07-04",
      "value": 99
    },
    {
      "day": "2015-06-28",
      "value": 258
    },
    {
      "day": "2015-09-17",
      "value": 105
    },
    {
      "day": "2015-04-03",
      "value": 81
    },
    {
      "day": "2015-06-14",
      "value": 5
    },
    {
      "day": "2015-11-20",
      "value": 58
    },
    {
      "day": "2018-02-19",
      "value": 386
    },
    {
      "day": "2016-02-16",
      "value": 31
    },
    {
      "day": "2017-06-30",
      "value": 117
    },
    {
      "day": "2016-08-22",
      "value": 254
    },
    {
      "day": "2015-12-01",
      "value": 318
    },
    {
      "day": "2015-08-06",
      "value": 2
    },
    {
      "day": "2017-12-09",
      "value": 326
    },
    {
      "day": "2015-06-29",
      "value": 142
    },
    {
      "day": "2015-10-18",
      "value": 124
    },
    {
      "day": "2017-03-19",
      "value": 98
    },
    {
      "day": "2016-12-06",
      "value": 146
    },
    {
      "day": "2015-07-16",
      "value": 303
    },
    {
      "day": "2016-06-01",
      "value": 271
    },
    {
      "day": "2018-03-24",
      "value": 295
    },
    {
      "day": "2016-03-19",
      "value": 1
    },
    {
      "day": "2017-05-23",
      "value": 189
    },
    {
      "day": "2016-10-12",
      "value": 89
    },
    {
      "day": "2016-10-24",
      "value": 235
    },
    {
      "day": "2017-11-06",
      "value": 213
    },
    {
      "day": "2017-09-04",
      "value": 172
    },
    {
      "day": "2018-01-06",
      "value": 333
    },
    {
      "day": "2017-05-10",
      "value": 386
    },
    {
      "day": "2018-02-03",
      "value": 71
    },
    {
      "day": "2016-03-23",
      "value": 289
    },
    {
      "day": "2016-04-03",
      "value": 313
    },
    {
      "day": "2018-06-30",
      "value": 100
    },
    {
      "day": "2017-04-21",
      "value": 58
    },
    {
      "day": "2017-11-01",
      "value": 60
    },
    {
      "day": "2016-09-06",
      "value": 362
    },
    {
      "day": "2016-09-22",
      "value": 41
    },
    {
      "day": "2016-11-22",
      "value": 385
    },
    {
      "day": "2015-10-03",
      "value": 390
    },
    {
      "day": "2017-02-14",
      "value": 55
    },
    {
      "day": "2018-03-31",
      "value": 343
    },
    {
      "day": "2018-06-15",
      "value": 75
    },
    {
      "day": "2016-01-08",
      "value": 79
    },
    {
      "day": "2016-02-20",
      "value": 116
    },
    {
      "day": "2015-06-01",
      "value": 31
    },
    {
      "day": "2017-08-27",
      "value": 72
    },
    {
      "day": "2015-08-10",
      "value": 83
    },
    {
      "day": "2016-08-30",
      "value": 144
    },
    {
      "day": "2018-07-30",
      "value": 10
    },
    {
      "day": "2017-08-07",
      "value": 110
    },
    {
      "day": "2016-11-03",
      "value": 352
    },
    {
      "day": "2018-01-15",
      "value": 247
    },
    {
      "day": "2017-09-28",
      "value": 188
    },
    {
      "day": "2015-08-20",
      "value": 123
    },
    {
      "day": "2016-07-05",
      "value": 378
    },
    {
      "day": "2017-08-23",
      "value": 238
    },
    {
      "day": "2016-02-02",
      "value": 61
    },
    {
      "day": "2018-05-10",
      "value": 268
    },
    {
      "day": "2015-07-11",
      "value": 390
    },
    {
      "day": "2015-11-17",
      "value": 85
    },
    {
      "day": "2017-01-28",
      "value": 246
    },
    {
      "day": "2017-03-21",
      "value": 36
    },
    {
      "day": "2018-03-15",
      "value": 358
    },
    {
      "day": "2017-02-05",
      "value": 56
    },
    {
      "day": "2015-06-09",
      "value": 322
    },
    {
      "day": "2017-07-05",
      "value": 338
    },
    {
      "day": "2018-02-18",
      "value": 38
    },
    {
      "day": "2015-07-05",
      "value": 59
    },
    {
      "day": "2017-09-18",
      "value": 310
    },
    {
      "day": "2018-08-05",
      "value": 246
    },
    {
      "day": "2018-05-27",
      "value": 360
    }
  ]

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const Calendar = props => (
    <ResponsiveCalendar
        data={data}
        from="2016-02-11"
        to="2016-05-13"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
)