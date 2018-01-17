
import Map from '../Map';
import React from 'react'
import ReactTestUtils from 'react-dom/test-utils';
import { setTimeout } from 'timers';

const setup = ()=>{
    const action = {
        ActionExtentChange: jest.fn(),
        ActionClickMap: jest.fn()
    }
    const spyFunction = {
        spyGoto: jest.fn(),
        spyAddGP: jest.fn()
    }

    const initialState =  {mapCenter: null, routeResult :null}
    // const component = shallow(<Map mapData={initialState} mapActions={action}/>)
    const component = ReactTestUtils.renderIntoDocument(<Map mapData={initialState} mapActions={action}/>);
    component.view = {
        goTo: spyFunction.spyGoto,
        graphics : {add : spyFunction.spyAddGP}
    }

    return {
        component: component,
        action: action,
        spy : spyFunction
    }
}


describe('Map', () => {
    it('renders without crashing', () => {
        const map = setup()
            const spy = jest.fn()
    });

    it('zoom to point should be fine', ()=>{
        const map = setup()
        map.component.zoomToPoint(13,100)
        
        expect(map.spy.spyGoto).toHaveBeenCalled()
    })

    it('draw route should call zoom to point', () =>{
        const map = setup()
        const routeResult = {
            route: [[13,100],[14,101]]
        }
        const spy = jest.fn()
        
        map.component.zoomToPoint = spy

        map.component.drawRoute(routeResult)
        // ยังหาวิธีเช็คใน Promise ไม่ได้
    })
})