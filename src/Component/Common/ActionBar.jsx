import {
  activeHomeSvg,
  activeBlockSvg,
  activeFac,
  plusSvg
} from '../../Constant/svgs'
import CameraModal from './CameraModal'

const ActionBar = () => {
  return (
    <>
      <div className='action-bar'>
        <div className='left-portion'>
          <span className='actionbar-icons'>{activeHomeSvg}</span>
          <span className='actionbar-icons'>{activeBlockSvg}</span>
          <span className='actionbar-icons'>{activeFac}</span>
        </div>
        <button
          type='button'
          class='modal_btn'
          data-bs-toggle='modal'
          data-bs-target='#exampleModal'
        >
          <div className='right-portion d-flex'>
            <div className='main-circle'>
              <div className='plus-circle'>
                <span>{plusSvg}</span>
              </div>
            </div>

            <h4 className='fs-6 text-white mt-2'>Add New Camera</h4>
          </div>
        </button>
      </div>

      <div
        class='modal fade'
        id='exampleModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-lg'>
          <div
            class='modal-content'
            style={{ backgroundColor: 'var(--main-black-color)' }}
          >
            <div class='modal-body'>
              <CameraModal />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ActionBar
