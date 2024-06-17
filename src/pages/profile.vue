<script>
import EvenList from '../components/EventList.vue'
import Popup from '../components/Popup.vue'

export default {
  data() {
    return {
      userEvents: [
        {
          title: 'Вечеринка в честь празднования нового года',
          description: `Значимость этих проблем настолько очевидна, что консультация с 
         широким активом влечет за собой процесс внедрения и модернизации систем  массового участия.
         Равным образом постоянный количественный рост и сфера нашей  активности позволяет оценить значение соответствующий условий  активизации.           Повседневная практика показывает, что сложившаяся структура
        организации играет важную роль в формировании соответствующий условий  активизации.`,
          creator: 'Екатерина Мурова',
          city: 'Санкт-Петербург',
          place: 'Площадь восстания',
          date: '10.11.2024',
          time: '',
          type: 'Частное мероприятие',
          followers: [
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            }
          ]
        },
        {
          title: 'Вечеринка в честь празднования нового года',
          description: `Значимость этих проблем настолько очевидна, что консультация с 
         широким активом влечет за собой процесс внедрения и модернизации систем  массового участия.
         Равным образом постоянный количественный рост и сфера нашей  активности позволяет оценить значение соответствующий условий  активизации.           Повседневная практика показывает, что сложившаяся структура
        организации играет важную роль в формировании соответствующий условий  активизации.`,
          creator: 'Екатерина Мурова',
          city: 'Санкт-Петербург',
          place: 'Площадь восстания',
          date: '10.11.2024',
          time: '',
          type: 'Частное мероприятие',
          followers: [
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            }
          ]
        },
        {
          title: 'Вечеринка в честь празднования нового года',
          description: `Значимость этих проблем настолько очевидна, что консультация с 
         широким активом влечет за собой процесс внедрения и модернизации систем  массового участия.
         Равным образом постоянный количественный рост и сфера нашей  активности позволяет оценить значение соответствующий условий  активизации.           Повседневная практика показывает, что сложившаяся структура
        организации играет важную роль в формировании соответствующий условий  активизации.`,
          creator: 'Екатерина Мурова',
          city: 'Санкт-Петербург',
          place: 'Площадь восстания',
          date: '10.11.2024',
          time: '',
          type: 'Частное мероприятие',
          followers: [
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            }
          ]
        },
        {
          title: 'Вечеринка в честь празднования нового года',
          description: `Значимость этих проблем настолько очевидна, что консультация с 
         широким активом влечет за собой процесс внедрения и модернизации систем  массового участия.
         Равным образом постоянный количественный рост и сфера нашей  активности позволяет оценить значение соответствующий условий  активизации.           Повседневная практика показывает, что сложившаяся структура
        организации играет важную роль в формировании соответствующий условий  активизации.`,
          creator: 'Екатерина Мурова',
          city: 'Санкт-Петербург',
          place: 'Площадь восстания',
          date: '10.11.2024',
          time: '',
          type: 'Частное мероприятие',
          followers: [
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            }
          ]
        }
      ],
      isFormSubmited: false
    }
  },
  components: {
    EvenList,
    Popup
  },
  methods: {
    openFormPopup() {
      this.$refs['form-popup'].openPopup()
    },
    submitForm() {
      this.isFormSubmited = true
      setTimeout(() => {
        this.$refs['form-popup'].closePopup()
        this.isFormSubmited = false
      }, 1000)
    }
  }
}
</script>

<template>
  <section class="profile">
    <div class="vector profile-vector" id="vector_1"></div>
    <div class="vector profile-vector" id="vector_2"></div>
    <div class="profile-description">
      <img class="profile-logo" src="../assets/images/avatar.svg" alt="" />
      <div class="profile-data">
        <p class="user-name">Екатерина Мурова</p>
        <p class="user-email">murovakate@ya.ru</p>
      </div>
    </div>
    <button class="btn" type="button" @click="openFormPopup">Создать новое событие</button>
    <section class="user-events">
      <h2 class="title">Мои события</h2>
      <EvenList :events="userEvents" className="section" />
    </section>
  </section>
  <Popup ref="form-popup">
    <div class="vector popup__vector" id="popup__vector-1"></div>
    <section v-if="!isFormSubmited">
      <h2 class="popup-title">Новое событие</h2>
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label class="input-label" for="event-title">Название</label>
          <input class="input-field" id="event-title" type="text" />
        </div>
        <div>
          <label class="input-label" for="event-img">Заставка</label>
          <input class="input-field" id="event-img" type="text" />
        </div>
        <div>
          <label class="input-label" for="event-description">Описание</label>
          <textarea class="input-field" id="event-description"></textarea>
        </div>
        <div>
          <label class="input-label" for="event-datetime">Дата и время проведения</label>
          <input class="input-field" id="event-datetime" type="datetime" />
        </div>
        <div>
          <label class="input-label" for="event-place">Место проведения</label>
          <input class="input-field" id="event-place" type="text" />
        </div>
        <div>
          <label class="input-label">Место проведения</label>
          <select class="input-field" name="event-type">
            <option value="" selected disabled>Выберите тип мероприятия</option>
            <option value="Частное мероприятие">Частное мероприятие</option>
            <option value="Публичное мероприятие">Публичное мероприятие</option>
          </select>
        </div>
        <button type="submit" class="btn form__btn">Создать</button>
      </form>
    </section>
    <section v-else>
      <p>Отлично! Событие создано.</p>
    </section>
  </Popup>
</template>

<style scoped>
.profile {
  padding-top: 60px;
  padding-bottom: 80px;
  position: relative;
}

.profile-description {
  max-width: 500px;
  margin: 0 auto 100px;
  display: flex;
  align-items: center;
  column-gap: 40px;
}

.profile-logo {
  display: block;
  width: 130px;
  height: 130px;
  object-fit: contain;
  border-radius: var(--raduis-percent-50);
}

.user-name {
  font-size: var(--text-size-35);
  font-weight: var(----medium-font-weigth);
}

.user-email {
  font-size: var(--text-size-20);
}

.btn {
  display: block;
  margin: 0 auto 150px;
  width: 100%;
  max-width: 350px;
  padding: 20px;
  background-color: var(--blue-color);
  color: var(--white-color);
  font-size: var(--text-size-26);
  border-radius: var(--raduis-10);
}

.title {
  text-transform: uppercase;
  max-width: 250px;
  margin: 0 auto 50px;
  text-align: center;
  font-size: var(--text-size-30);
}

.profile-vector {
  z-index: -1;
  background-size: cover;
}

#vector_1 {
  width: 950px;
  height: 500px;
  background: url(../assets/images/vectors/profile-vector-1.svg) no-repeat;
  left: -380px;
  top: 190px;
}
#vector_2 {
  width: 500px;
  height: 815px;
  background: url(../assets/images/vectors/profile-vector-2.svg) no-repeat;
  right: 0;
  bottom: 50px;
}

.popup-title {
  font-size: var(--text-size-26);
  text-align: center;
  margin-bottom: 40px;
}

.form {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.input-field {
  display: block;
  width: 100%;
  padding: 15px 10px;
  box-shadow: 0 0 17px var(--dark-shadow-color);
  border-radius: var(--raduis-10);
  font-size: var(--text-size-19);
}

.input-field:focus {
  outline: 3px solid var(--blue-color);
}

.input-label {
  display: block;
  font-size: var(--text-size-18);
  opacity: var(--opacity);
  margin-bottom: 5px;
}

.form__btn {
  margin-bottom: 0;
  padding: 15px;
  font-size: var(--text-size-20);
  margin-top: 15px;
}

.popup__vector {
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -1;
}

#popup__vector-1 {
  width: 700px;
  height: 700px;
  background-image: url(../assets/images/vectors/profile-vector-2.svg);
  left: -400px;
  top: 50px;
  transform: rotate(180deg);
}
</style>
