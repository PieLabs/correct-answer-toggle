import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import proxyquire from 'proxyquire';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

describe('CorespringShowCorrectAnswerToggle', () => {

  let onToggle;
  let wrapper;
  let sheet;
  let CorespringShowCorrectAnswerToggle;

  let mkWrapper = (initialValue, msgs) => {
    initialValue = initialValue === false ? false : true;
    msgs = msgs || {};
    return shallow(<CorespringShowCorrectAnswerToggle 
      initialValue={initialValue} 
      onToggle={onToggle} 
      hideMessage={msgs.hide}
      showMessage={msgs.show}
      sheet={sheet}/>, {
      context: { muiTheme: { palette: {}}}
    });
  }

  beforeEach(() => {
    CorespringShowCorrectAnswerToggle = proxyquire('../src/index', {
      "!style!css!less!./index.less": {
         '@noCallThru': true
      }
    })._CorespringShowCorrectAnswerToggle;

    sheet = { classes: {
      root: 'root',
      label: 'label'
    }};
    onToggle = sinon.stub();
    wrapper = mkWrapper(); 
  });

  describe('render', () => {

    it('has an svg-holder', () => {
      let holder = wrapper.find('.svg-holder');
      expect(holder).to.have.length(1); 
    });
    
    it('has an the root class name', () => {
      let holder = wrapper.find('.svg-holder');
      expect(holder.prop('className')).to.eql('svg-holder root');
    });
    
    it('has the hide message', () => {
      let holder = wrapper.find('.label');
      expect(holder.text()).to.eql('Hide correct answer');
    });

    it('has the show is initialValue is true', () => {
      let holder = mkWrapper(false).find('.label');
      expect(holder.text()).to.eql('Show correct answer');
    });

    it('sets a custom hide message', () => {
      wrapper = mkWrapper(true, {hide: 'hide!'}); 
      let holder = wrapper.find('.label');
      expect(holder.text()).to.eql('hide!');
    });
    
    it('sets a custom show message', () => {
      wrapper = mkWrapper(false, {show: 'show!'}); 
      let holder = wrapper.find('.label');
      expect(holder.text()).to.eql('show!');
    });

  });

  describe('onClick', () => {
    it('updates the state', () => {
      wrapper.find('.svg-holder').simulate('click');
      expect(wrapper.state('toggled')).to.eql(false);
    });
    
    it('updates the state after 2 clicks', () => {
      wrapper.find('.svg-holder').simulate('click');
      wrapper.find('.svg-holder').simulate('click');
      expect(wrapper.state('toggled')).to.eql(true);
    });
    
    it('calls onToggle', () => {
      wrapper.find('.svg-holder').simulate('click');
      sinon.assert.calledWith(onToggle, false);
    })
   });

});